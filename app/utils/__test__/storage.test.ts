import * as storage from '../storage';

beforeEach(async () => {
  await storage.clearStorage();
});

describe('Storage clear', () => {
  test('Should be clear table correctly', async () => {
    await storage.clearStorage();
    const logSpy = jest.spyOn(console, 'log');
    expect(logSpy).not.toBeCalledWith(expect.stringMatching(/Error: AsyncStorage failed to clear/g));
  });
});

describe('Storage get item', () => {
  test('should exist', async () => {
    await storage.getTablePoint();
    const logSpy = jest.spyOn(console, 'log');
    expect(logSpy).not.toBeCalledWith(expect.stringMatching(/Error: AsyncStorage failed to get table point/g));
  });
  test('if no record in table point storage, should return an empty array', async () => {
    const result = await storage.getTablePoint();
    expect(result).toEqual([]);
  });
  test('if have record in table point storage, should return array recorded point', async () => {
    await storage.recordToTablePoint('test-player', 10);
    const result = await storage.getTablePoint();
    expect(result).toEqual([{playerName: 'test-player', score: 10}]);
  });
});

describe('Storage set item', () => {
  test('should exist', async () => {
    await storage.recordToTablePoint('test-player', 10);
    const logSpy = jest.spyOn(console, 'log');
    expect(logSpy).not.toBeCalledWith(expect.stringMatching(/Error: AsyncStorage failed to record player point/g));
  });
  test('should validate input correctly', async () => {
    await storage.recordToTablePoint('', '10');
    const logSpy = jest.spyOn(console, 'log');
    expect(logSpy).toBeCalledWith(expect.stringMatching(/Invalid input/g));
    await storage.recordToTablePoint(true, []);
    const logSpy2 = jest.spyOn(console, 'log');
    expect(logSpy2).toBeCalledWith(expect.stringMatching(/Invalid input/g));
  });
  test('should set item correctly', async () => {
    await storage.recordToTablePoint('test-player', 10);
    await storage.recordToTablePoint('test-player2', 20);
    const result = await storage.getTablePoint();
    expect(result).toEqual([
      {playerName: 'test-player', score: 10},
      {playerName: 'test-player2', score: 20},
    ]);
  });
});
