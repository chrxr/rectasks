import React from 'react';
import { shallow } from 'enzyme';
import DataTable, { StyledTable } from '../DataTable';

// Render the component
// Mock the child compenents
// Use data-testid to get components (https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change)

describe('<DataTable />', () => {
  const wrapper = shallow(<DataTable><div /></DataTable>);

  it('renders the StyledTable element', () => {
    expect(wrapper.find(StyledTable)).toHaveLength(1);
  });

  it('renders the table headers', () => {
    expect(wrapper.containsMatchingElement(<th>Last completed</th>)).toEqual(true);
  });

  it('renders children within tbody element', () => {
    expect(wrapper.containsMatchingElement(<tbody><div /></tbody>)).toEqual(true);
  });
});
