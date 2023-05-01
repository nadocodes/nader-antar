import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, message);
  }

  return (
    <div className='Contact secondaryDefault' id='contact'>
      <h2>Contact Me</h2>
      <form className='ContactForm' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: </label>
        <input type='text' id='name' name='name' placeholder='Your name...' onChange={handleNameChange} />
        <label htmlFor='email'>Email: </label>
        <input type='email' id='email' name='email' placeholder='Your email...' onChange={handleEmailChange} />
        <label htmlFor='message'>Message: </label>
        <textarea id='message' name='message' placeholder='Your message...' rows={10} cols={60} onChange={handleMessageChange} ></textarea>
        <input type='submit' value='Submit' />
      </form>
      <p>Feel free to reach out to me at <a href='mailto:naderantar96@gmail.com'>NaderAntar96@gmail.com</a></p>
    </div>
  )
}

export default Contact;