import React, {useMemo, useState} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import styles from './styles';

interface Props {
  extraSpacer?: boolean;
}

const Divider = (props: Props) => {
  const {extraSpacer} = props;
  const [styleState, setStyleState] = useState<StyleProp<ViewStyle>>(null);

  useMemo(() => {
    if (extraSpacer) {
      setStyleState([styles.container]);
    } else {
      setStyleState([styles.container, styles.extraSpace]);
    }
  }, [extraSpacer]);

  return <View style={styleState} />;
};

export default Divider;
