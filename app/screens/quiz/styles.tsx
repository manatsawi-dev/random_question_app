import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  sectionHeader: {},
  sectionCenter: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionBottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    height: 60,
  },
  countTimer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: 'white',
  },
  textLeader: {
    marginBottom: 20,
  },
  btn1: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    width: 250,
  },
  btn2: {
    marginVertical: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    width: 250,
  },
});

export default styles;
