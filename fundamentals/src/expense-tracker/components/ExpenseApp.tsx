import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';
import ExpenseForm from './ExpenseForm';
import { categories } from '../constant';

function ExpenseApp() {
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
   const [category, setCategory] = useState<string>('');

   function handleDelete(id: number) {
      setExpenses((prev) => prev.filter((item) => item.id !== id));
   }

   function handleSelectCategory(category: string) {
      setCategory(category);
   }

   function renderList() {
      return category
         ? expenses.filter((exp) => exp.category === category)
         : expenses;
   }

   function handleFormSubmit({ amount, description, category }: FieldValues) {
      const newExpense = {
         id: Math.trunc(Math.random() * 10000 + 1),
         amount,
         description,
         category,
      };
      setExpenses((prev) => [...prev, newExpense]);
   }

   return (
      <div>
         {/* <Form /> */}
         <div className='mb-3'>
            <ExpenseForm categories={categories} onSubmit={handleFormSubmit} />
         </div>
         <div className='mb-3'>
            <ExpenseFilter
               onSelectCategory={handleSelectCategory}
               categories={categories}
            />
         </div>
         <ExpenseList expenses={renderList()} onDelete={handleDelete} />
      </div>
   );
}

export default ExpenseApp;
