import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({onSaveExpenseData, toggleFormHandler}) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const inputChangeHandler = (value, setStateFn) => setStateFn(value);

    function submitHandler(e){
        e.preventDefault();
        onSaveExpenseData({ title: enteredTitle, amount: enteredAmount, date: new Date(enteredDate) });

        //clear input
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        toggleFormHandler(false);

    }

    const hideFormHandler = event => toggleFormHandler(false);


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" name="title" id="" value={enteredTitle} onChange={e => inputChangeHandler(e.target.value, setEnteredTitle)} required/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" name='amount' onChange={e => inputChangeHandler(e.target.value, setEnteredAmount)} required/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2026-31-12" name='date' onChange={e => inputChangeHandler(e.target.value, setEnteredDate)} required/>
                </div>
                <div className="new-expense__actions">
                    <button type='button' onClick={hideFormHandler}>Cancel</button>
                </div>
                <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm