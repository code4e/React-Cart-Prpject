import Expenses from "./components/Expenses/Expenses";
import NewExpense
  from "./components/Expenses/NewExpense/NewExpense";
import { useState } from "react";
function App() {

  const [expenses, setExpenses] = useState([
    { id: 2302874271, title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
    { id: 7910511388, title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    { id: 1929854864, title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28), },
    { id: 5278036540, title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12), },
  ]);

  const uniqueId = (length = 10) => parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(length).toString().replace(".", ""));

  const saveExpenseDataHandler = enteredExpenseData => setExpenses(prevExpensesState => [...prevExpensesState, { ...enteredExpenseData, id: uniqueId() }]);

  return (
    <div className="App">
      <NewExpense onSaveExpenseData={saveExpenseDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
