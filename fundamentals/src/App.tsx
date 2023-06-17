import ListGroup from './components/ListGroup';
import './App.css';
import Alert from './components/Alert';
import Button from './components/Button';
import Form from './components/Form';

function App() {
   const items = ['Kolkata', 'Mumbai', 'New Delhi', 'Bangalore'];
   const heading = 'List';

   function handleSelectItem(item: string) {
      console.log(item);
   }
   return (
      <div>
         <Form />
      </div>
   );
}

export default App;
