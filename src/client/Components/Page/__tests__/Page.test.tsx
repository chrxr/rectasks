import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import Page from '../Page';
import DataTable from '../../DataTable/DataTable';
import TableData from '../../DataTable/TableData/TableData';

const fakeClickHandler = spy();
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

describe('<Page />', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<Page />);
  });
});
