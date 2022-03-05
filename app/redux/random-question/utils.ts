import shuffle from 'lodash/shuffle';
import keyBy from 'lodash/keyBy';
import isEqual from 'lodash/isEqual';
import dataQuestions from '../../res/data';
import * as I from '../../Interface';

export const createChoices = (ans: string, listBaseChoice: string[]): string[] => {
  if (!ans || !Array.isArray(listBaseChoice) || (Array.isArray(listBaseChoice) && !listBaseChoice.length)) {
    return [];
  }
  const baseChoices = shuffle(listBaseChoice.filter(a => a !== ans)).slice(0, 3);
  const choices = shuffle([ans, ...baseChoices]);
  if (isEqual(choices, listBaseChoice.slice(0, 4))) {
    return createChoices(ans, listBaseChoice);
  }
  return choices;
};

export const createRandomQuestion = (): I.questions[] => {
  const keysBaseQuestion = keyBy(dataQuestions, 'id');
  const shuffledQuestion = shuffle(dataQuestions).slice(0, 20);
  const shuffledAnswer = shuffledQuestion.map(item => {
    const shuffledChoice = createChoices(item.ans, keysBaseQuestion[item.id].choices);
    const question = {
      ...item,
      choices: shuffledChoice,
    };
    return question;
  });
  return shuffledAnswer;
};
