interface Props {
   onSelectCategory: (category: string) => void;
   categories: readonly string[];
}

function ExpenseFilter({ onSelectCategory, categories }: Props) {
   return (
      <select
         className='form-select'
         onChange={(e) => onSelectCategory(e.target.value)}
      >
         <option value=''>All Categories</option>
         {categories.map((category) => (
            <option key={category} value={category}>
               {category}
            </option>
         ))}
      </select>
   );
}

export default ExpenseFilter;
