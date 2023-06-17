import { FieldValues, useForm } from 'react-hook-form';

interface IUser {
   name: string;
   age: number;
}

function Form() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<IUser>();

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
               <p className='text-danger'>Input field is not valid</p>
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
               {...register('age', { required: true })}
            />
            {errors.age && (
               <p className='text-danger'>Input field is not valid</p>
            )}
         </div>
         <button className='btn btn-primary'>Submit</button>
      </form>
   );
}

export default Form;
