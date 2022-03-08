import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import ScreenView from '../../views/screen';
import Typography from '../../components/typography';
import Gesture from '../../components/gesture';
import QuestionView from './views/question-view';
import styles from './styles';
import * as action from '../../redux/random-question/actions';
import * as I from '../../Interface/index';

const COUNT_TIMER = 30;

const QuizScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const playerState = useSelector((state: I.RootState) => state.round);
  const questionState = useSelector((state: I.RootState) => state.question);

  const [timerState, setTimerState] = useState<number>(COUNT_TIMER);
  const [currentQuestion, setCurrentQuestion] = useState<I.Questions>();
  const [stopTimer, setStopTimer] = useState<boolean>(false);
  const [score, setScore] = useState(0);

  const onPressExit = (): void => {
    navigation.goBack();
  };

  const onCheckCorrectAns = (ans: string): void => {
    if (questionState.randomQuestion[questionState.currentIndex]?.ans === ans) {
      setScore(score + 1);
    }
  };

  const onSelectedAns = (ans: string): void => {
    onCheckCorrectAns(ans);
    if (questionState.currentIndex === 19) {
      setStopTimer(true);
      return;
    }
    setCurrentQuestion({...questionState.randomQuestion[questionState.currentIndex + 1]});
    dispatch(action.snapToNextQuestion());
    setTimerState(30);
  };

  const onPressPlayAgain = (): void => {
    dispatch(action.endCurrentRound());
    dispatch(action.randomQuestion());
    setTimerState(30);
    setStopTimer(false);
    setScore(0);
  };

  useEffect(() => {
    return () => {
      dispatch(action.endCurrentRound());
    };
  }, [dispatch]);

  useEffect(() => {
    if (playerState.playerName) {
      dispatch(action.randomQuestion());
    }
  }, [playerState.playerName, dispatch]);

  useEffect(() => {
    if (Array.isArray(questionState.randomQuestion)) {
      setCurrentQuestion({...questionState.randomQuestion[0]});
    }
  }, [questionState.randomQuestion]);

  useEffect(() => {
    let timer: NodeJS.Timer;
    if (stopTimer) {
      return;
    }
    if (timerState > 0) {
      timer = setInterval(() => {
        setTimerState(timerState - 1);
      }, 1000);
    }
    if (timerState === 0) {
      if (questionState.currentIndex < 19) {
        const nextQuestion: I.Questions = questionState.randomQuestion[questionState.currentIndex + 1];
        setCurrentQuestion({...nextQuestion});
        setTimerState(COUNT_TIMER);
      }
      if (questionState.currentIndex === 19 && !stopTimer) {
        setStopTimer(true);
      }
      dispatch(action.snapToNextQuestion());
    }
    return () => {
      clearInterval(timer);
    };
  }, [questionState, timerState, stopTimer, dispatch]);

  useEffect(() => {
    if (stopTimer && questionState.currentIndex === 19) {
      dispatch(action.recordScore(playerState.playerName, score));
    }
  }, [stopTimer, questionState.currentIndex, playerState, score, dispatch]);

  return (
    <ScreenView>
      <View style={styles.container}>
        {!Array.isArray(questionState.randomQuestion) ? (
          <View style={styles.sectionCenter}>
            <Typography testID="LeaderBoardScreen.TextHeader" center>
              Random questions...
            </Typography>
          </View>
        ) : (
          <>
            {stopTimer ? (
              <>
                <View style={styles.sectionHeader}>
                  <Typography testID="LeaderBoardScreen.TextHeader" center>
                    End Game
                  </Typography>
                </View>
                <View style={styles.sectionCenter}>
                  <Typography testID="LeaderBoardScreen.TextScore" center>
                    {`SCORE : ${score}`}
                  </Typography>
                  <Gesture testID="btn.play" style={styles.btn1} onPress={onPressPlayAgain}>
                    <Typography testID="LeaderBoardScreen.TextPlayAgain" center>
                      Play Again
                    </Typography>
                  </Gesture>
                  <Gesture testID="btn.exit" style={styles.btn2} onPress={onPressExit}>
                    <Typography testID="LeaderBoardScreen.TextExit" center>
                      Exit
                    </Typography>
                  </Gesture>
                </View>
              </>
            ) : (
              <>
                <View style={styles.sectionHeader}>
                  <Typography testID="LeaderBoardScreen.TextHeader" center>
                    {`Question: ${questionState.currentIndex + 1}`}
                  </Typography>
                </View>
                <View style={styles.sectionCenter}>
                  <QuestionView
                    question={currentQuestion?.question}
                    choices={currentQuestion?.choices}
                    onSelected={onSelectedAns}
                  />
                </View>
                <View style={styles.sectionBottom}>
                  <View style={styles.countTimer}>
                    <Typography testID="QuizScreen.Bottom.TextPrevious" center>
                      {`${timerState}`}
                    </Typography>
                  </View>
                </View>
              </>
            )}
          </>
        )}
      </View>
    </ScreenView>
  );
};

export default QuizScreen;
