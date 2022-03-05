import keyBy from 'lodash/keyBy';
import * as utils from '../utils';
import dataQuestions from '../../../res/data';

describe('Redux random question utils createChoices', () => {
  test('should return shuffled array of choice correctly', () => {
    const choicesWithAns = ['A', 'B', 'C', 'D'];
    const allChoice = ['A', 'B', 'C', 'D', 'E', 'F'];
    const choices = utils.createChoices(choicesWithAns, allChoice);
    expect(choices.length).toEqual(4);
    expect(choices).not.toEqual(allChoice.slice(0, 4));
  });
});

describe('Redux random question utils createRandomQuestion', () => {
  test('should return shuffled array of question correctly', () => {
    const question = utils.createRandomQuestion();
    expect(question.length).toEqual(20);
    expect(question).not.toEqual(dataQuestions.slice(0, 20));
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
