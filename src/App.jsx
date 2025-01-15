import ContactList from "../ContactList"
import ContactDetails from "../ContactDetails"
import { useState } from "react"

const App = () => {
  const [singleContactDetails, setSingleContactDetails] = useState({})

  return (
    <>
      <h1>My Favorite Contacts</h1>
      <ContactList setSingleContactDetails={setSingleContactDetails} />
      <ContactDetails singleContactDetails={singleContactDetails} />
    </>
  )
}

export default App
