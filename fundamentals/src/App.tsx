import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ExpenseList from './expense-tracker/components/ExpenseList';

function App() {
   const staticExpenses = [
      {
         id: 1,
         amount: 50.0,
         category: 'Food',
         description: 'Lunch at a local restaurant',
      },
      {
         id: 2,
         amount: 25.99,
         category: 'Transportation',
         description: 'Bus fare for the daily commute',
      },
      {
         id: 3,
         amount: 12.5,
         category: 'Entertainment',
         description: 'Movie ticket for the latest release',
      },
      {
         id: 4,
         amount: 150.0,
         category: 'Shopping',
         description: 'New pair of shoes',
      },
      {
         id: 5,
         amount: 30.0,
         category: 'Utilities',
         description: 'Internet bill for the month',
      },
   ];

   const [expenses, setExpenses] = useState(staticExpenses);

   function handleDelete(id: number) {
      setExpenses((prev) => prev.filter((item) => item.id !== id));
   }

   return (
      <div>
         {/* <Form /> */}
         <ExpenseList expenses={expenses} onDelete={handleDelete} />
      </div>
   );
}

export default App;
