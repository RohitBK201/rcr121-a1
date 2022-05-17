import './App.css';
import { useState } from 'react';
import { AddContact } from './components/AddContact';
import { ContactCard } from './components/Contactcard';

const initState = [

  {
    id : 1,
    first_name : "rohit",
    contact : "+91-9083152283"
  },
  {
    id : 2,
    first_name : "rajat",
    contact : "+91-97183647923"
  }

];

function App() {

  const [contactList,setConstactList] =useState([]);

  const handleClick = (name,phone) =>
  {
    setConstactList([
      ...contactList,     
      {
        id : contactList.length + 1,
        first_name : name,
        contact : phone

      }
    ]);
  };

  const deleteById = (id) =>{

    setConstactList(contactList.filter((item)=> item.id!==id));

  };

  return (
    <div className="App">

      <h1>Contact List</h1>

      <AddContact handleClick={handleClick} />
      <br/>
      {contactList.map((item) => (

        <div key={item.id}>

          <ContactCard  
          id={item.id} 
          name={item.first_name} 
          phone={item.contact} 
          onDelete={deleteById}
          />
          
        </div>

      ))}
     
    </div>
  );
}

export default App;
