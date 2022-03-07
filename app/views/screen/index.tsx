import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';

interface Props {
  disabledScroll?: boolean;
  children?: React.ReactNode;
}

const ScreenView = (props: Props) => {
  const {children, disabledScroll} = props;

  if (disabledScroll) {
    return (
      <SafeAreaView testID="screen.safeArea" style={styles.safeArea}>
        <View testID="screen.containerView" style={styles.container}>
          {children}
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView testID="screen.safeArea" style={styles.safeArea}>
      <ScrollView
        testID="screen.scrollView"
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.scrollView}>
        <View testID="screen.containerView" style={styles.container}>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenView;
