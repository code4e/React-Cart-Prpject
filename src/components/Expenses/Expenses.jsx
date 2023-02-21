import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({expenses}) => {
    const [yearFilter, setYearFilter] = useState('All');

    const filteredExpenses = yearFilter === 'All' ? expenses : expenses.filter(expense => expense.date.getFullYear().toString() === yearFilter);

    const filterYear = year => setYearFilter(year);

    return (
        <Card className='expenses'>
            <ExpensesFilter onFilterYearChange={filterYear} yearFilter={yearFilter}/>
            {yearFilter !== 'All' && <ExpensesChart expenses={filteredExpenses}/>}
            <ExpensesList expenses={filteredExpenses}/>
        </Card>
    )
}

export default Expenses