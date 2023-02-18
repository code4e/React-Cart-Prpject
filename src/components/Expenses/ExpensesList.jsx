import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ expenses }) => {
    return expenses.length === 0 ? <h1 className='expenses-list__fallback'>No Content to show</h1> : <ul className='expenses-list'>{ (expenses.map(expense => <ExpenseItem expense={expense} key={expense.id} />)) }</ul>;
}

export default ExpensesList