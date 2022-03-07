import React from 'react';
import {Text} from 'react-native';
import {render} from '@testing-library/react-native';
import ScreenView from '../index';

describe('Views screen', () => {
  test('should render element correctly', () => {
    const component = render(<ScreenView />);
    const safeArea = component.queryByTestId('screen.safeArea');
    const scrollView = component.queryByTestId('screen.scrollView');
    const containerView = component.queryByTestId('screen.containerView');
    expect(safeArea).not.toBeNull();
    expect(scrollView).not.toBeNull();
    expect(containerView).not.toBeNull();
  });
  test('should render with props disabled scroll correctly', () => {
    const component = render(<ScreenView disabledScroll />);
    const safeArea = component.queryByTestId('screen.safeArea');
    const scrollView = component.queryByTestId('screen.scrollView');
    const containerView = component.queryByTestId('screen.containerView');
    expect(safeArea).not.toBeNull();
    expect(scrollView).toBeNull();
    expect(containerView).not.toBeNull();
  });
  test('should render with children correctly', () => {
    const component = render(
      <ScreenView>
        <Text testID="screen.test.children">Children Test</Text>
      </ScreenView>,
    );
    const safeArea = component.queryByTestId('screen.safeArea');
    const scrollView = component.queryByTestId('screen.scrollView');
    const containerView = component.queryByTestId('screen.containerView');
    const children = component.queryByTestId('screen.test.children');
    expect(safeArea).not.toBeNull();
    expect(scrollView).not.toBeNull();
    expect(containerView).not.toBeNull();
    expect(children).not.toBeNull();
  });
  test('should render with array of children correctly', () => {
    const component = render(
      <ScreenView>
        <Text testID="screen.test.children">Children Test</Text>
        <Text testID="screen.test.children2">Children Test2</Text>
      </ScreenView>,
    );
    const safeArea = component.queryByTestId('screen.safeArea');
    const scrollView = component.queryByTestId('screen.scrollView');
    const containerView = component.queryByTestId('screen.containerView');
    const children = component.queryByTestId('screen.test.children');
    const children2 = component.queryByTestId('screen.test.children2');
    expect(safeArea).not.toBeNull();
    expect(scrollView).not.toBeNull();
    expect(containerView).not.toBeNull();
    expect(children.props.children).toBe('Children Test');
    expect(children2.props.children).toBe('Children Test2');
  });
});
