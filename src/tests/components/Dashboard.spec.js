import React from 'react'
import {shallow} from 'enzyme'
import DashboardPage from '../../components/DashboardPage'

test('Should have a dashboard',() => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
})
