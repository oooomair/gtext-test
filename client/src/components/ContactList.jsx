import React from 'react'
import Contact from './Contact';

const ContactList = ({contacts, onChange, onDelete}) => {

  return (
    <div className='contactList'>
      <div className="contact contact-header">
        <span>First Name</span>
        <span>Last Name</span>
        <span>Email</span>
      </div>
          {contacts ? contacts.map(contact => {
                return <Contact key={contact._id} contact={contact} onChange={onChange} onDelete={onDelete}/>
            })
          :
          <h3>Loading...</h3>}
    </div>
  )
}

export default ContactList