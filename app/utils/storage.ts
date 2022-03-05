import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_TABLE_POINT = '@TABLE_POINT';

interface RowPoint {
  playerName: string;
  score: number;
}

export const getTablePoint = async (): Promise<RowPoint[]> => {
  try {
    const tablePointJSON: any = await AsyncStorage.getItem(KEY_TABLE_POINT);
    const tablePoint: Array<RowPoint> = JSON.parse(tablePointJSON);
    if (Array.isArray(tablePoint)) {
      return tablePoint;
    }
    return [];
  } catch (error) {
    console.log(`Error: AsyncStorage failed to get table point ${error}`);
    return [];
  }
};

export const recordToTablePoint = async (playerName: string, score: number): Promise<void> => {
  try {
    if (!playerName || typeof score !== 'number') {
      throw new Error('Invalid input');
    }
    const tablePointJSON: any = await AsyncStorage.getItem(KEY_TABLE_POINT);
    let tablePoint: Array<RowPoint> = JSON.parse(tablePointJSON);
    const newRecord: RowPoint = {playerName, score};
    if (Array.isArray(tablePoint)) {
      tablePoint.push(newRecord);
    } else {
      tablePoint = [{...newRecord}];
    }
    await AsyncStorage.setItem(KEY_TABLE_POINT, JSON.stringify(tablePoint));
  } catch (error) {
    console.log(`Error: AsyncStorage failed to record player point : ${error}`);
  }
};

export const clearStorage = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(`Error: AsyncStorage failed to clear : ${error}`);
  }
};
