module.exports = {
  get: () => {
    const jsonData = [
      {
        name: 'task 1',
        lastCompleted: '01-02-2020',
        frequency: 'annual',
        id: 1,
      },
      {
        name: 'task 2',
        lastCompleted: '01-03-2020',
        frequency: 'quarterly',
        id: 2,
      },
    ];
    console.log('HELLO');
    return Promise.resolve({ jsonData });
  },
};
