import React from 'react';
import { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import DataTable, { StyledTable } from '../DataTable';

// configure({ adapter: new Adapter() });
// Render the component
// Mock the child compenents
// Use data-testid to get components (https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change)

describe('<DataTable>', () => {
  it('renders 4 th elements', () => {
    const wrapper = shallow(<DataTable><div /></DataTable>);
    expect(wrapper.find(StyledTable)).toHaveLength(1);
  });
});
