// shif+alt+f
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense.js";
import Expenses from "./components/Expenses/Expenses.js";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: 45,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "new tv", amount: 7634, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 378,
    date: new Date(2021, 2, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
