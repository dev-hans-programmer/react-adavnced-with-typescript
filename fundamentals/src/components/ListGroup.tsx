function ListGroup() {
   const items = ['Kolkata', 'Mumbai', 'New Delhi', 'Bangalore'];

   return (
      <ul className='list-group'>
         {items.map((item) => (
            <li className='list-group-item'>{item}</li>
         ))}
      </ul>
   );
}

export default ListGroup;
