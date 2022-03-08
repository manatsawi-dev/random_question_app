import React from 'react';
import {Text} from 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import ScreenView from '../index';

describe('Views screen', () => {
  test('should render element correctly', () => {
    const onScrollMock = jest.fn();
    const comp = render(<ScreenView onScroll={onScrollMock} />);
    const safeArea = comp.getByTestId('screen.safeArea');
    const scrollView = comp.getByTestId('screen.scrollView');
    const containerView = comp.getByTestId('screen.containerView');
    expect(safeArea).not.toBeNull();
    expect(scrollView).not.toBeNull();
    expect(containerView).not.toBeNull();
    fireEvent.scroll(scrollView);
    expect(onScrollMock).toHaveBeenCalled();
  });
  test('should render with props disabled scroll correctly', () => {
    const comp = render(<ScreenView disabledScroll />);
    const safeArea = comp.getByTestId('screen.safeArea');
    const scrollView = comp.queryByTestId('screen.scrollView');
    const containerView = comp.getByTestId('screen.containerView');
    expect(safeArea).not.toBeNull();
    expect(scrollView).toBeNull();
    expect(containerView).not.toBeNull();
  });
  test('should render with children correctly', () => {
    const comp = render(
      <ScreenView>
        <Text testID="screen.test.children">Children Test</Text>
      </ScreenView>,
    );
    const safeArea = comp.getByTestId('screen.safeArea');
    const scrollView = comp.getByTestId('screen.scrollView');
    const containerView = comp.getByTestId('screen.containerView');
    const children = comp.getByTestId('screen.test.children');
    expect(safeArea).not.toBeNull();
    expect(scrollView).not.toBeNull();
    expect(containerView).not.toBeNull();
    expect(children).not.toBeNull();
  });
  test('should render with array of children correctly', () => {
    const comp = render(
      <ScreenView>
        <Text testID="screen.test.children">Children Test</Text>
        <Text testID="screen.test.children2">Children Test2</Text>
      </ScreenView>,
    );
    const safeArea = comp.getByTestId('screen.safeArea');
    const scrollView = comp.getByTestId('screen.scrollView');
    const containerView = comp.getByTestId('screen.containerView');
    const children = comp.getByTestId('screen.test.children');
    const children2 = comp.getByTestId('screen.test.children2');
    expect(safeArea).not.toBeNull();
    expect(scrollView).not.toBeNull();
    expect(containerView).not.toBeNull();
    expect(children?.props.children).toBe('Children Test');
    expect(children2?.props.children).toBe('Children Test2');
    expect(children).toHaveTextContent('Children Test');
  });
});
