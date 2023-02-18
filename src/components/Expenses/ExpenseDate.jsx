import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = ({expenseDate}) => {
    const month = expenseDate.toLocaleString('default', { month: 'long' });
    const day = expenseDate.getDate();
    const year = expenseDate.getFullYear();
    return (
        <div className='expense-date'>
            <div className="expense-date__month">
                {month}
            </div>
            <div className="expense-date__day">
                {day}th
            </div>
            <div className="expense-date__year">
                {year}
            </div>
        </div>
    )
}

export default ExpenseDate