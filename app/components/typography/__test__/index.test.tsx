import React from 'react';
import {render} from '@testing-library/react-native';
import Typography from '../index';

describe('Component typography', () => {
  const TEST_ID: string = 'component.typography';

  test('should render text correctly', () => {
    const component = render(<Typography testID={TEST_ID}>Test</Typography>);
    const text = component.getByTestId(TEST_ID);
    expect(text).not.toBeNull();
    expect(text).not.toHaveTextContent('Test A');
    expect(text).toHaveTextContent('Test');
  });
  test('should render text with props level correctly', () => {
    const component = render(<Typography testID={TEST_ID}>Test</Typography>);
    expect(component.getByTestId(TEST_ID)).toHaveStyle({fontSize: 30});
    component.rerender(
      <Typography testID={TEST_ID} center level={2}>
        Test
      </Typography>,
    );
    expect(component.getByTestId(TEST_ID)).toHaveStyle({fontSize: 24});
    component.rerender(
      <Typography testID={TEST_ID} center level={3}>
        Test
      </Typography>,
    );
    expect(component.getByTestId(TEST_ID)).toHaveStyle({fontSize: 18});
    component.rerender(
      <Typography testID={TEST_ID} center level={10}>
        Test
      </Typography>,
    );
    expect(component.getByTestId(TEST_ID)).toHaveStyle({fontSize: 30});
  });
  test('should render text with props textStyle correctly', () => {
    const component = render(<Typography testID={TEST_ID}>Test</Typography>);
    expect(component.getByTestId(TEST_ID)).not.toHaveStyle({textAlign: 'center'});
    component.rerender(
      <Typography testID={TEST_ID} center>
        Test
      </Typography>,
    );
    expect(component.getByTestId(TEST_ID)).toHaveStyle({textAlign: 'center'});
    component.rerender(
      <Typography testID={TEST_ID} verticalSpacer>
        Test
      </Typography>,
    );
    expect(component.getByTestId(TEST_ID)).toHaveStyle({marginVertical: 20});
    component.rerender(
      <Typography testID={TEST_ID} horizontalSpacer>
        Test
      </Typography>,
    );
    expect(component.getByTestId(TEST_ID)).toHaveStyle({marginHorizontal: 20});
    component.rerender(
      <Typography testID={TEST_ID} spacer>
        Test
      </Typography>,
    );
    expect(component.getByTestId(TEST_ID)).toHaveStyle({margin: 20});
    component.rerender(
      <Typography testID={TEST_ID} center verticalSpacer>
        Test
      </Typography>,
    );
    expect(component.getByTestId(TEST_ID)).toHaveStyle({textAlign: 'center', marginVertical: 20});
    expect(component.getByTestId(TEST_ID)).toHaveTextContent('Test');
  });
  test('should render text with props style correctly', () => {
    const component = render(
      <Typography testID={TEST_ID} style={{marginTop: 20}}>
        Test
      </Typography>,
    );
    expect(component.getByTestId(TEST_ID)).toHaveTextContent('Test');
    expect(component.getByTestId(TEST_ID)).toHaveStyle({marginTop: 20});
    component.rerender(
      <Typography testID={TEST_ID} style={{marginTop: 20, padding: 30}}>
        Test
      </Typography>,
    );
    expect(component.getByTestId(TEST_ID)).toHaveStyle({marginTop: 20, padding: 30});
  });
});
