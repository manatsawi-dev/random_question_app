import React from 'react';
import {View, SafeAreaView, ScrollView, NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import styles from './styles';

interface Props {
  disabledScroll?: boolean;
  children?: React.ReactNode;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

const ScreenView = (props: Props) => {
  const {children, disabledScroll, onScroll} = props;

  if (disabledScroll) {
    return (
      <SafeAreaView testID="screen.safeArea" style={styles.safeArea}>
        <View testID="screen.containerView" style={styles.containerFullHeight}>
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
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={150}
        onScroll={scrollEvent => {
          if (onScroll) {
            onScroll(scrollEvent);
          }
        }}>
        <View testID="screen.containerView" style={styles.container}>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenView;
