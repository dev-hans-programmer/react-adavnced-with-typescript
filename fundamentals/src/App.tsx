import ListGroup from './components/ListGroup';
import './App.css';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
   const items = ['Kolkata', 'Mumbai', 'New Delhi', 'Bangalore'];
   const heading = 'List';

   function handleSelectItem(item: string) {
      console.log(item);
   }
   return (
      <div>
         <ListGroup
            items={items}
            heading={heading}
            onSelectItem={handleSelectItem}
         />
         <Alert>
            <span>hello world</span>
         </Alert>
         <Button color='danger' onClick={() => console.log('hello world')}>
            Click Me
         </Button>
      </div>
   );
}

export default App;
