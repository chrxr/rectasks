import React from 'react';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import TableData from '../TableData';


describe('<TableData>', () => {
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
  const wrapper = shallow(<TableData jsonData={jsonData} updateClickHandler={fakeClickHandler} />);

  it('renders the correct amount of table rows', () => {
    expect(wrapper.find('tr')).toHaveLength(2);
  });

  it('executes the click handler just once when the button is clicked', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(fakeClickHandler).toHaveProperty('callCount', 1);
  });

  it('displays the data correctly', () => {
    expect(wrapper.find('[data-testid="name"]').at(0).text()).toEqual('task 1');
    expect(wrapper.find('[data-testid="lastCompleted"]').at(0).text()).toEqual('01-02-2020');
    expect(wrapper.find('[data-testid="frequency"]').at(0).text()).toEqual('annual');
  });
});
