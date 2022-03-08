import React from 'react';
import {TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import Typography from '../typography';
import styles from './styles';

interface Props {
  testID: string;
  onPress: () => void;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const Gesture = (props: Props) => {
  const {children, onPress, style, testID, disabled} = props;
  return (
    <TouchableOpacity
      testID={testID}
      disabled={disabled || false}
      activeOpacity={0.8}
      style={[styles.container, style && style]}
      onPress={onPress}>
      {typeof children === 'string' ? (
        <Typography testID="component.gesture.text" level={3}>
          {children}
        </Typography>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default Gesture;
