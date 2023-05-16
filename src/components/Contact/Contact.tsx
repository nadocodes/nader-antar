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
  const [isLoading, setIsLoading] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Set the state of name to the value of the input
    setName(e.target.value);
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Set the state of email to the value of the input
    setEmail(e.target.value);
  }

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Set the state of subject to the value of the input
    setSubject(e.target.value);
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Set the state of message to the value of the input
    setMessage(e.target.value);
  }

  const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default behavior of the form
    setIsLoading(true);
    e.preventDefault();
    console.log(name, email, subject, message);
    const data = {
      name,
      email,
      subject,
      message
    };
    if (!email || !message) {
      // Set the state of sentError to true if email or message are empty
      setSentError(true);
      setIsLoading(false);
      return;
    } else {
      // Send the email using the send function and the data object.
      send(
        'service_lucky13sep',
        'template_mrwvdap',
        data,
        'rSE5pk3vVd6zNp2qw'
      )
      .then((response) => {
        console.log(response);
        // Reset the state of all the inputs to empty strings
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        // Set the state of sent to true
        setSent(true);
        // Set the state of sentError to false
        setSentError(false);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      }
      );
    }
  }

  return (
    <div className='Contact secondaryDefault' id='contact'>
      <h2>Contact Me</h2>
      <form className='ContactForm' onSubmit={sendMail}>
        <div className='formField'>
          <label htmlFor='name' />
          <input type='text' id='name' className='contactInput' name='name' placeholder='Enter Full Name' value={name} onChange={handleNameChange} />
          <label htmlFor='email' />
          <input type='email' id='email' className='contactInput' name='email' placeholder='Enter Email Address' value={email} onChange={handleEmailChange}/>
          <label htmlFor='subject' />
          <input type='text' id='subject' className='contactInput' name='subject' placeholder='Enter Subject' value={subject} onChange={handleSubjectChange}/>
        </div>
        <label htmlFor='message'>Message: </label>
        <textarea id='message' className='contactInput' name='message' placeholder='Enter Your Message!' value={message} onChange={handleMessageChange} ></textarea>
        <div className='formFeedback'>
          {sentError && <p id='warning'>Please fill out required fields</p>}
          {sent && <p id='success'>Success! Thank you for reaching out!</p>}
        </div>
        <input type='submit' value='Send' className='sendEmail' disabled={isLoading}/>
      </form>
      <p>Feel free to reach out to me at <a href='mailto:naderantar96@gmail.com'>NaderAntar96@gmail.com</a></p>
    </div>
  )
}

export default Contact;