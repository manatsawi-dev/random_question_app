import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import Typography from '../../../components/typography';
import styles from './styles';
import * as I from '../../../Interface/index';

const TablePointView = () => {
  const leaderBoardState: I.RowPoint[] = useSelector((state: I.RootState) => state.tableScore.leaderBoard);

  return (
    <View style={styles.container}>
      {Array.isArray(leaderBoardState) && leaderBoardState.length ? (
        <View style={styles.rowHeader}>
          <Typography testID="LeaderBoardScreen.View.TitleName" level={3} style={styles.textTitle}>
            Player Name
          </Typography>
          <Typography testID="LeaderBoardScreen.View.TitleScore" level={3} style={styles.textTitle}>
            Score
          </Typography>
        </View>
      ) : null}
      <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
        {!Array.isArray(leaderBoardState) ? null : (
          <View>
            {!leaderBoardState.length ? (
              <Text>No record score</Text>
            ) : (
              leaderBoardState.map((item, index) => (
                <View key={index.toString()} style={styles.row}>
                  <Typography
                    testID={`LeaderBoardScreen.View.RowItem.Name${index}`}
                    level={3}
                    style={styles.textRowScore}>
                    {item.playerName}
                  </Typography>
                  <Typography
                    testID={`LeaderBoardScreen.View.RowItem.Score${index}`}
                    level={3}
                    style={styles.textRowScore}>
                    {`${item.score}`}
                  </Typography>
                </View>
              ))
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default TablePointView;
