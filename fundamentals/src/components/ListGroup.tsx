import { useState } from 'react';

interface Props {
   items: string[];
   heading: string;
   onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
   const [selectedItem, setSelectedItem] = useState<string>('');

   function handleClick(item: string) {
      setSelectedItem(item);
      onSelectItem(item);
   }

   return (
      <>
         <h1>{heading}</h1>

         <ul className='list-group'>
            {items.length === 0 && <p>No item found</p>}
            {items.map((item) => (
               <li
                  key={item}
                  className={`list-group-item ${
                     selectedItem === item ? 'active' : ''
                  }`}
                  onClick={() => handleClick(item)}
               >
                  {item}
               </li>
            ))}
         </ul>
      </>
   );
}

export default ListGroup;
