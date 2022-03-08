import React, {useEffect, useCallback, useState} from 'react';
import {View, TextInput, KeyboardAvoidingView, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import ScreenView from '../../views/screen';
import TablePointView from './views/table-point-view';
import Typography from '../../components/typography';
import Gesture from '../../components/gesture/index';
import Divider from '../../components/divider';
import styles from './styles';
import * as storage from '../../utils/storage';
import * as action from '../../redux/random-question/actions';
import * as routes from '../../navigation/stack-names';

const LeaderBoardScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [playerNameState, setPlayerNameState] = useState<string>('Player001');

  const onPressPlay = (): void => {
    if (!playerNameState) {
      Alert.alert('Please enter your name');
      return;
    }
    dispatch(action.playNewRound(playerNameState));
    navigation.navigate(routes.QUIZ.path);
  };

  const onChangeText = (text: string): void => {
    setPlayerNameState(text);
  };

  const initialLeaderBoard = useCallback(async (): Promise<void> => {
    const storedLeader = await storage.getTablePoint();
    const payload = Array.isArray(storedLeader) ? storedLeader : [];
    dispatch(action.getTablePoint(payload));
  }, [dispatch]);

  useEffect(() => {
    initialLeaderBoard();
  }, [initialLeaderBoard]);

  return (
    <KeyboardAvoidingView behavior="padding">
      <ScreenView>
        <View style={styles.container}>
          <View style={styles.sectionHeader}>
            <Typography testID="LeaderBoardScreen.TextHeader" center>
              Random Quiz App
            </Typography>
            <Divider />
            <Typography testID="LeaderBoardScreen.TextLeader" level={2} center style={styles.textLeader}>
              Leader Board
            </Typography>
          </View>
          <View style={styles.sectionBoard}>
            <TablePointView />
          </View>
          <View style={styles.sectionBottom}>
            <TextInput
              style={styles.inputName}
              placeholder="Enter your name"
              value={playerNameState}
              onChangeText={onChangeText}
            />
            <Gesture testID="LeaderBoardScreen.ButtonPlay" style={styles.btnPlay} onPress={onPressPlay}>
              <Typography testID="LeaderBoardScreen.ButtonText" level={2} center>
                Start Quiz
              </Typography>
            </Gesture>
          </View>
        </View>
      </ScreenView>
    </KeyboardAvoidingView>
  );
};

export default LeaderBoardScreen;
