const ContactDetails = (props) => {
  
  return (
    <>
      <h1>{props.singleContactDetails.name}</h1>
      <h2>{props.singleContactDetails.email}</h2>
    </>
  )
}

export default ContactDetails