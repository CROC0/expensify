import React from 'react';
import { shallow } from 'enzyme';
import ExpencesSummary, { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render expenses summary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={123} />)
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render expenses summary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={10} expensesTotal={1230} />)
    expect(wrapper).toMatchSnapshot();
});