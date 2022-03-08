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
    alignItems: 'center',
    marginTop: 16,
    height: 100,
  },
  textLeader: {
    marginBottom: 20,
  },
  inputName: {
    backgroundColor: 'white',
    width: 280,
    height: 50,
    marginBottom: 10,
    borderRadius: 6,
    fontSize: 20,
    paddingHorizontal: 16,
  },
  btnPlay: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 6,
    height: 50,
    width: 280,
  },
});

export default styles;
