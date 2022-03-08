import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  choicesView: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 100,
  },
  choiceItem: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    minWidth: '100%',
    maxWidth: 500,
  },
});

export default styles;
