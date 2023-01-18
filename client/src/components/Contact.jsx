import {BsFillTrashFill} from 'react-icons/bs';

const Contact = ({contact, onDelete, onChange}) => {
  return (
    <div onClick={() => onChange(contact._id, contact.color)} className='contact'>
        <span> <p><BsFillTrashFill onClick={() => onDelete(contact._id)}/></p> {contact.firstName} </span>
        <span> {contact.lastName} </span>
        <span> {contact.email} </span>
    </div>
  )
}

export default Contact