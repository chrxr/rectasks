import buildDataTableHandler from '../buildDataTableHandler';

const task1 = {
  name: 'task1',
  lastCompleted: '2020-01-01',
  frequency: 'monthly',
};

const task2 = {
  name: 'task2',
  lastCompleted: '2020-01-01',
  frequency: 'yearly',
};

const taskData = [task1, task2];

const clickFunction = (event: React.MouseEvent<HTMLButtonElement>):void => null;

test('Function should return an array of table rows', async () => {
  const table = buildDataTableHandler(taskData, clickFunction);

  expect(table).toHaveLength(2);
});
