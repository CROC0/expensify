import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses';
import getExpenseTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const amount = numeral(expensesTotal / 100).format('$0,0.00')
    return (
    <div>
    <h1>
    Viewing {expenseCount} {expenseWord} totalling {amount}
    </h1>
    
    </div>
)};

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters)
    return {
      expenseCount: expenses.length,
      expensesTotal: getExpenseTotal(expenses)
    };
  };
  
  export default connect(mapStateToProps)(ExpensesSummary);