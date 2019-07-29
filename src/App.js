import React, {useState} from 'react';

import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import './App.css';

import uuid from 'uuid/v4';

const initExpenses=[
  {id: uuid(), charge: 'rent', amt: 2000},
  {id: uuid(), charge: 'car', amt: 400},
  {id: uuid(), charge: 'creditcard', amt: 1200}

]

console.log(initExpenses);
function App() {
  const [expenses, setExpenses]= useState(initExpenses);
  const [charge, setCharge] = useState(''); 
   const [amt, setAmt] = useState('');
   const [alert, setAlert] = useState({show: false});

  const handleCharge = e =>{
    setCharge( e.target.value);
  };

  const handleAmt = e =>{
    setAmt( e.target.value);
  };

  const handleAlert = ({type, text}) =>{
    setAlert({show: true, type, text});
    setTimeout(
      ()=>{setAlert({show:false}, 2000)}
    )
  }
  const handleSubmit = e =>{
    e.preventDefault();
    if (charge !='' && amt >0) {
      const singleExpense = {id:uuid(), charge, amt};
      setExpenses([...expenses, singleExpense]);
      setAmt('');
      setCharge('');
    }
    else {
      //
      setAlert({type: 'danger', text:'charge cannot be empty value and amt'} ); 
    }

  };

  const handleDelete = (id) =>{
    let tmpExpenses = expenses.filter(item =>item.id !== id);
    setExpenses(tmpExpenses);
    console.log(tmpExpenses);

  }

  const handleEdit = (id) =>{
    console.log(`handle edit: ${id}`);

  }
  const clearItems = () =>{
    setExpenses([]);
    console.log('clear items');

  }

  
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} /> }
     <Alert />
     <h1>Budget Calculator</h1>
     <main  className='App'>
      <ExpenseForm
         charge={charge}
         amt={amt} 
         handleCharge={handleCharge} 
         handleAmt={handleAmt} 
          handleSubmit={handleSubmit}    />
      <ExpenseList expenses={expenses} handleEdit={handleEdit} handleDelete={handleDelete} clearItems={clearItems} />

     </main>
     <h1>
       Total spending: <span className='total'>
         $ {expenses.reduce((acc, curr) =>{
           return (acc +=parseInt(curr.amt)) ;
         }, 0)}
       </span>
     </h1>
    </>
  );
}

export default App;
