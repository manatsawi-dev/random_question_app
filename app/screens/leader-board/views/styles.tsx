import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.text.white,
    borderRadius: 6,
  },
  scrollView: {
    padding: 16,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  rowHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.backgrounds[0],
  },
  textTitle: {
    color: colors.text.dark,
  },
  textRowScore: {
    color: colors.text.dark,
    fontSize: 16,
  },
});

export default styles;
