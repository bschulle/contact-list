import { useEffect, useState } from "react"

const ContactList = () => {
  const [allContacts, setAllContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      const fetchedContacts = await response.json();
      setAllContacts(fetchedContacts);
    }
    getContacts()
  }, []);
  
  return (
    <>
      <ul>
        {
          allContacts.map((singleContact) =>{
            return <li>{singleContact.name}</li>
          })
        }
      </ul>

    </>
  )
}

export default ContactList