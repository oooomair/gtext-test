import { useState } from 'react';

const Form = ({onAddContact}) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const addContact = (e) => {
        e.preventDefault();
        const newContact = { firstName, lastName, email };
    
        fetch('http://localhost:8000/contacts/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newContact)
          })
        
          setFirstName('')
          setLastName('')
          setEmail('')

          onAddContact(newContact)
    
        }
    
  return (
    <form onSubmit={addContact} className='form'>
    <input placeholder='First Name' required value={firstName} onChange={e => setFirstName(e.target.value)} type="text" />
    <input placeholder='Last Name' required value={lastName} onChange={e => setLastName(e.target.value)} type="text" />
    <input placeholder='Email' required value={email} onChange={e => setEmail(e.target.value)} type="email" />
    <button type='submit'>Add</button>
  </form>
  )
}

export default Form