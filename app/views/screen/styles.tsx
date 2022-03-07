import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgrounds[0],
    padding: 16,
  },
  scrollView: {
    height: '100%',
  },
  safeArea: {
    backgroundColor: colors.backgrounds[0],
  },
});

export default Styles;
