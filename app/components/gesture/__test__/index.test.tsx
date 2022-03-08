import React from 'react';
import {Text, View} from 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import Gesture from '../index';

const TEST_ID = 'component.gesture.touchable';

describe('Component gesture test render', () => {
  const onPressMock = jest.fn();
  test('should render component gesture with child as string correctly', () => {
    const comp = render(
      <Gesture testID={TEST_ID} onPress={onPressMock}>
        Gesture
      </Gesture>,
    );
    const btn = comp.getByTestId(TEST_ID);
    fireEvent.press(btn);
    expect(onPressMock).toHaveBeenCalled();
    const text = comp.getByText('Gesture');
    expect(text).toHaveTextContent('Gesture');
  });
  test('should render component gesture with child as node correctly', () => {
    const comp = render(
      <Gesture testID={TEST_ID} onPress={onPressMock}>
        <View testID="gesture.container">
          <Text testID="gesture.text">Gesture</Text>
        </View>
      </Gesture>,
    );
    const btn = comp.getByTestId(TEST_ID);
    fireEvent.press(btn);
    expect(onPressMock).toHaveBeenCalled();
    const view = comp.getByTestId('gesture.container');
    const text = comp.getByTestId('gesture.text');
    expect(text).toHaveTextContent('Gesture');
    expect(view).not.toBeEmpty();
  });
});

describe('Component gesture test props', () => {
  test('should render with prop disabled correctly', () => {
    const onPressMock1 = jest.fn();
    const onPressMock2 = jest.fn();
    const comp = render(
      <Gesture testID={TEST_ID} disabled onPress={onPressMock1}>
        Gesture
      </Gesture>,
    );
    const btn = comp.getByTestId(TEST_ID);
    fireEvent.press(btn);
    expect(onPressMock1).not.toHaveBeenCalled();
    comp.rerender(
      <Gesture testID={TEST_ID} onPress={onPressMock2}>
        Gesture
      </Gesture>,
    );
    const btn2 = comp.getByTestId(TEST_ID);
    fireEvent.press(btn2);
    expect(onPressMock2).toHaveBeenCalled();
  });
  test('should render with prop style correctly', () => {
    const onPressMock1 = jest.fn();
    const comp = render(
      <Gesture testID={TEST_ID} style={{marginTop: 20}} onPress={onPressMock1}>
        Gesture
      </Gesture>,
    );
    const btn = comp.getByTestId(TEST_ID);
    fireEvent.press(btn);
    expect(onPressMock1).toHaveBeenCalled();
    expect(btn).toHaveStyle({marginTop: 20});
    comp.rerender(
      <Gesture testID={TEST_ID} style={{marginTop: 20, marginLeft: 20}} onPress={onPressMock1}>
        Gesture
      </Gesture>,
    );
    const btn2 = comp.getByTestId(TEST_ID);
    expect(btn2).toHaveStyle({marginTop: 20, marginLeft: 20});
    expect(comp.getByText('Gesture')).toHaveTextContent('Gesture');
  });
});
