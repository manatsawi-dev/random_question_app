import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LeaderBoardScreen from '../screens/leader-board';
import QuizScreen from '../screens/quiz';
import * as ROUTES from './stack-names';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={ROUTES.LEADER_BOARD.path}
          component={LeaderBoardScreen}
          options={{title: ROUTES.LEADER_BOARD.title}}
        />
        <Stack.Screen name={ROUTES.QUIZ.path} component={QuizScreen} options={{title: ROUTES.QUIZ.title}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
