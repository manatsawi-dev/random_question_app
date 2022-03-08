import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  sectionHeader: {},
  sectionBoard: {
    flex: 1,
    height: '100%',
  },
  sectionBottom: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 16,
    height: 100,
  },
  textLeader: {
    marginBottom: 20,
  },
});

export default styles;
