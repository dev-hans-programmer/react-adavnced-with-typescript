interface Expense {
   id: number;
   description: string;
   amount: number;
   category: string;
}

interface Props {
   expenses: Expense[];
   onDelete: (id: number) => void;
}

function ExpenseList({ expenses, onDelete }: Props) {
   return (
      <table className='table table-bordered'>
         <thead>
            <tr>
               <th>Description</th>
               <th>Amount</th>
               <th>Category</th>
               <th></th>
            </tr>
         </thead>
         <tbody>
            {expenses.map(({ id, amount, category, description }) => (
               <tr key={id}>
                  <td>{description}</td>
                  <td>{amount}</td>
                  <td>{category}</td>
                  <td>
                     <button
                        className='btn btn-outline-danger'
                        onClick={() => onDelete(id)}
                     >
                        Delete
                     </button>
                  </td>
               </tr>
            ))}
         </tbody>
         <tfoot>
            <tr>
               <td>Total</td>
               <td>
                  $
                  {expenses
                     .reduce((acc, expense) => expense.amount + acc, 0)
                     .toFixed(2)}
               </td>
               <td></td>
               <td></td>
            </tr>
         </tfoot>
      </table>
   );
}

export default ExpenseList;
