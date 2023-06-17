import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
   name: z.string().min(3, { message: 'Name must be 3 characters long.' }),
   age: z
      .number({ invalid_type_error: 'Age is required.' })
      .min(18, { message: 'Age must be at least 18.' }),
});

type IUser = z.infer<typeof schema>;

// interface IUser {
//    name: string;
//    age: number;
// }

function Form() {
   const {
      register,
      handleSubmit,
      formState: { errors, isValid },
   } = useForm<IUser>({ resolver: zodResolver(schema) });

   const onSubmit = (data: FieldValues) => {
      console.log(data);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
               Name
            </label>
            <input
               id='name'
               type='text'
               className='form-control'
               {...register('name', { required: true, minLength: 3 })}
            />
            {errors.name && (
               <p className='text-danger'>{errors.name.message}</p>
            )}
         </div>
         <div className='mb-3'>
            <label htmlFor='age' className='form-label'>
               Age
            </label>
            <input
               id='age'
               type='number'
               className='form-control'
               {...register('age', { required: true, valueAsNumber: true })}
            />
            {errors.age && <p className='text-danger'>{errors.age.message}</p>}
         </div>
         <button disabled={!isValid} className='btn btn-primary'>
            Submit
         </button>
      </form>
   );
}

export default Form;
