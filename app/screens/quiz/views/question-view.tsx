import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Typography from '../../../components/typography';
import styles from './styles';

interface Props {
  question?: string;
  choices?: string[];
  onSelected: (ans: string) => void;
}

const QuestionView = (props: Props) => {
  const {question, choices, onSelected} = props;
  return (
    <View>
      <Typography testID="LeaderBoardScreen.TextHeader" center>
        {question || ''}
      </Typography>
      <View style={styles.choicesView}>
        {!Array.isArray(choices)
          ? null
          : choices.map((item, index) => (
              <TouchableOpacity key={index.toString()} style={styles.choiceItem} onPress={() => onSelected(item)}>
                <Typography testID="LeaderBoardScreen.TextHeader" center level={2}>
                  {item}
                </Typography>
              </TouchableOpacity>
            ))}
      </View>
    </View>
  );
};

export default QuestionView;
