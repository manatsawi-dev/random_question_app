import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  level1: {
    color: colors.text.white,
    fontSize: 30,
  },
  level2: {
    color: colors.text.white,
    fontSize: 24,
  },
  level3: {
    color: colors.text.white,
    fontSize: 18,
  },
  center: {
    textAlign: 'center',
  },
  verticalSpacer: {
    marginVertical: 20,
  },
  horizontalSpacer: {
    marginHorizontal: 20,
  },
  spacer: {
    margin: 20,
  },
});

export default styles;
