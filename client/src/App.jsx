import './App.scss';
import ContactList from './components/ContactList';
import { useState, useEffect } from 'react';
import Form from './components/Form';

function App() {

  const [contacts, setContacts] = useState([])

  const onAddContact = (newContact) => {
    setContacts(prevContacts => [...prevContacts, newContact]);
	}

  const onDelete = (id) => {
    setContacts(contacts.filter(({ _id }) => _id !== id))

    fetch(
      `http://localhost:8000/contacts/${id}`,
      {
        method: 'DELETE'
      }
    ).then(res => {
      return res.json()
    })
  }

  const onChange = (id, color) => {
    // fetch(`http://localhost:8000/contacts/${id}`, {
    //   method: 'PATCH',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(!color)
    // })
  }

useEffect(() => {
   fetch('http://localhost:8000/contacts/')
  .then(res => {
    return res.json()
  }).then(res => {
    setContacts(res)
  });
}, [])

  return (
    <div className="App">
      <h1>Contacts</h1>
        <Form onAddContact={onAddContact}/>
        <ContactList contacts={contacts} onDelete={onDelete} onChange={onChange}/>
    </div>
  );
}

export default App;
