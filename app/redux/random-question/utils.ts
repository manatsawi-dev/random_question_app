import shuffle from 'lodash/shuffle';
import keyBy from 'lodash/keyBy';
import isEqual from 'lodash/isEqual';
import dataQuestions from '../../res/data';
import * as I from '../../Interface';

export const createChoices = (listChoice: string[], listBaseChoice: string[]): string[] => {
  if (!Array.isArray(listChoice) || !Array.isArray(listBaseChoice)) {
    return [];
  }
  const choices = shuffle(listChoice);
  if (isEqual(choices, listBaseChoice.slice(0, 4))) {
    return createChoices(choices, listBaseChoice);
  }
  return choices;
};

export const createRandomQuestion = (): I.questions[] => {
  const keysBaseQuestion = keyBy(dataQuestions, 'id');
  const shuffledQuestion = shuffle(dataQuestions).slice(0, 20);
  const shuffledAnswer = shuffledQuestion.map(item => {
    const choices = item.choices.filter(a => a !== item.ans).slice(0, 3);
    const shuffledChoice = createChoices([item.ans, ...choices], keysBaseQuestion[item.id].choices);
    const question = {
      ...item,
      choices: shuffledChoice,
    };
    return question;
  });
  return shuffledAnswer;
};
