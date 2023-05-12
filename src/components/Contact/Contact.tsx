import React, { useState } from 'react';
import { send } from 'emailjs-com';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [sentError, setSentError] = useState(false);

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
      setSentError(true);
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
        setSent(true);
        setSentError(false);
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
        <div className='formField'>
          <label htmlFor='name'>Name: </label>
          <input type='text' id='name' className='contactInput' name='name' placeholder='Your name...' value={name} onChange={handleNameChange} />
        </div>
        <div className='formField'>
          <label htmlFor='email'>Email: </label>
          <input type='email' id='email' className='contactInput' name='email' placeholder='Your email...' value={email} onChange={handleEmailChange}/>
        </div>
        <div className='formField'>
          <label htmlFor='subject'>Subject: </label>
          <input type='text' id='subject' className='contactInput' name='subject' placeholder='Subject...' value={subject} onChange={handleSubjectChange}/>
        </div>
        <label htmlFor='message'>Message: </label>
        <textarea id='message' className='contactInput' name='message' placeholder='Your message...' value={message} onChange={handleMessageChange} ></textarea>
        <div className='formFeedback'>
          {sentError && <p id='warning'>Please fill out required fields</p>}
          {sent && <p id='success'>Success! Thank you for reaching out!</p>}
        </div>
        <input type='submit' value='Send' className='sendEmail' />
      </form>
      <p>Feel free to reach out to me at <a href='mailto:naderantar96@gmail.com'>NaderAntar96@gmail.com</a></p>
    </div>
  )
}

export default Contact;