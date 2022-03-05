import keyBy from 'lodash/keyBy';
import * as utils from '../utils';
import dataQuestions from '../../../res/data';

describe('Redux random question utils createChoices', () => {
  const allChoice: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
  test('should return empty array correctly. ans = empty string', () => {
    const ans: string = '';
    const choices = utils.createChoices(ans, allChoice);
    expect(choices.length).toEqual(0);
  });
  test('should return return empty array correctly. base choices = empty array', () => {
    const ans: string = 'A';
    const choices = utils.createChoices(ans, []);
    expect(choices.length).toEqual(0);
  });
  test('should return shuffled array of choice correctly ans = A', () => {
    const ans: string = 'A';
    const choices = utils.createChoices(ans, allChoice);
    expect(choices.length).toEqual(4);
    expect(choices).not.toEqual(allChoice.slice(0, 4));
  });
  test('should return shuffled array of choice correctly ans = B', () => {
    const ans: string = 'B';
    const choices = utils.createChoices(ans, allChoice);
    expect(choices.length).toEqual(4);
    expect(choices).not.toEqual(allChoice.slice(0, 4));
  });
});

describe('Redux random question utils createRandomQuestion', () => {
  test('should return shuffled array of question correctly', () => {
    const question = utils.createRandomQuestion();
    const question2 = utils.createRandomQuestion();
    const question3 = utils.createRandomQuestion();
    expect(question.length).toEqual(20);
    expect(question2.length).toEqual(20);
    expect(question3.length).toEqual(20);
    expect(question).not.toEqual(dataQuestions.slice(0, 20));
    expect(question2).not.toEqual(dataQuestions.slice(0, 20));
    expect(question3).not.toEqual(dataQuestions.slice(0, 20));
    console.log(question, 'question-set-1');
  });
  test('should return shuffled array of choices correctly', () => {
    const questions = utils.createRandomQuestion();
    const keysBaseQuestion = keyBy(dataQuestions, 'id');
    questions.forEach(question => {
      const baseQuestion = keysBaseQuestion[question.id];
      if (baseQuestion) {
        expect(question.choices.length).toEqual(4);
        expect(question.choices).not.toEqual(baseQuestion.choices.slice(0, 4));
      }
    });
  });
});
