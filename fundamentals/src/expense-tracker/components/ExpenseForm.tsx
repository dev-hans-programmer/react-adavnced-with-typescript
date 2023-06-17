import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { categories } from '../constant';

interface Props {
   categories: readonly string[];
   onSubmit: (data: IExpenseFormData) => void;
}

const schema = z.object({
   description: z
      .string()
      .min(10, { message: 'Descripton should be 10 characters long' }),
   amount: z
      .number({ invalid_type_error: 'Amount is required' })
      .min(10, { message: 'Amount should be atleast 10' }),
   category: z.enum(categories),
});

type IExpenseFormData = z.infer<typeof schema>;

function ExpenseForm({ categories, onSubmit }: Props) {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<IExpenseFormData>({
      resolver: zodResolver(schema),
   });

   return (
      <form
         onSubmit={handleSubmit((data) => {
            onSubmit(data);
            reset();
         })}
      >
         <div className='mb-3'>
            <label htmlFor='description' className='form-label'>
               Description
            </label>
            <input
               id='description'
               type='text'
               className='form-control'
               {...register('description')}
            />
         </div>
         {errors.description && (
            <p className='text-danger'>{errors.description.message}</p>
         )}
         <div className='mb-3'>
            <label htmlFor='amount' className='form-label'>
               Amount
            </label>
            <input
               id='amount'
               type='number'
               className='form-control'
               {...register('amount', { valueAsNumber: true })}
            />
         </div>
         {errors.amount && (
            <p className='text-danger'>{errors.amount.message}</p>
         )}
         <div className='mb-3'>
            <label htmlFor='category' className='form-label'>
               Category
            </label>
            <select
               id='category'
               className='form-control'
               {...register('category')}
            >
               <option value=''></option>
               {categories.map((category) => (
                  <option key={category} value={category}>
                     {category}
                  </option>
               ))}
            </select>
         </div>
         {errors.category && (
            <p className='text-danger'>{errors.category.message}</p>
         )}
         <button className='btn btn-primary'>Add Expense</button>
      </form>
   );
}

export default ExpenseForm;
