import React from 'react';
import ScreenView from '../../views/screen';
import TablePointView from './views/table-point-view';
import Typography from '../../components/typography';

const LeaderBoardScreen = () => {
  return (
    <ScreenView>
      <Typography testID="LeaderBoardScreen.TextHeader" center>
        Random Quiz App
      </Typography>
      <Typography testID="LeaderBoardScreen.TextLeader" level={2} center verticalSpacer>
        Leader Board
      </Typography>
      <TablePointView />
    </ScreenView>
  );
};

export default LeaderBoardScreen;
