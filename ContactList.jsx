import { useEffect, useState } from "react"

const ContactList = (props) => {
  const [allContacts, setAllContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      const fetchedContacts = await response.json();
      setAllContacts(fetchedContacts);
    }
    getContacts()
  }, []);
  
  const getContactDetails = async (contactName) =>{
    const response = await fetch ('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
    const contactDetails = await response.json();
    props.setSingleContactDetails(contactDetails);
  }

  return (
    <>
      <ul>
        {
          allContacts.map((singleContact) =>{
            return <li onClick={ () => {getContactDetails (singleContact.name)} } 
            key = {singleContact.name} >{singleContact.name}</li>
          })
        }
      </ul>

    </>
  )
}

export default ContactList