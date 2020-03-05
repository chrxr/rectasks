import React from 'react';
import { shallow } from 'enzyme';
import Page from '../Page';
import taskData from '../../../Types/taskDataType';
import getDataHandler from '../Handlers/getDataHandler';

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

jest.mock(getDataHandler);

export interface pageProps {
  getDataHandler: ()=>Promise<taskData[]>
}

describe('<Page />', () => {
  getDataHandler.mockResolvedValue(Promise.resolve(jsonData));
  beforeEach(() => {
    let wrapper = shallow(<Page />);
  });

  describe('on start', () => {
    it('loads the authors', () => {
      expect(getDataHandler).toHaveBeenCalled();
    });
  });
});
