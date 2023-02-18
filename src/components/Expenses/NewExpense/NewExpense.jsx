import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onSaveExpenseData }) => {
    const [showForm, setShowForm] = useState(false);
    const toggleFormHandler = state => setShowForm(state);

    return (
        <div className='new-expense'>
            {showForm ? <ExpenseForm onSaveExpenseData={onSaveExpenseData} toggleFormHandler={toggleFormHandler}/> :
                <button onClick={(e) => toggleFormHandler(true)}>Add New Expense</button>
            }
        </div>
    )
}

export default NewExpense