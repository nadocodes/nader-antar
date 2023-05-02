import React, { useState } from 'react';
import { send } from 'emailjs-com';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  }

  const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, subject, message);
    const data = {
      name,
      email,
      subject,
      message
    };
    if (!email || !message) {
      alert('Please fill out required fields');
      return;
    } else {
      send(
        'service_lucky13sep',
        'template_mrwvdap',
        data,
        'rSE5pk3vVd6zNp2qw'
      )
      .then((response) => {
        console.log(response);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.log(error);
      }
      );
    }
  }

  return (
    <div className='Contact secondaryDefault' id='contact'>
      <h2>Contact Me</h2>
      <form className='ContactForm' onSubmit={sendMail}>
        <label htmlFor='name'>Name: </label>
        <input type='text' id='name' name='name' placeholder='Your name...' value={name} onChange={handleNameChange} />
        <label htmlFor='email'>Email: </label>
        <input type='email' id='email' name='email' placeholder='Your email...' value={email} onChange={handleEmailChange}/>
        <label htmlFor='subject'>Subject: </label>
        <input type='text' id='subject' name='subject' placeholder='Subject...' value={subject} onChange={handleSubjectChange}/>
        <label htmlFor='message'>Message: </label>
        <textarea id='message' name='message' placeholder='Your message...' value={message} rows={10} cols={60} onChange={handleMessageChange} ></textarea>
        <input type='submit' value='Submit' />
      </form>
      <p>Feel free to reach out to me at <a href='mailto:naderantar96@gmail.com'>NaderAntar96@gmail.com</a></p>
    </div>
  )
}

export default Contact;