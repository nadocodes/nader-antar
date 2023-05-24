import React, { useState } from 'react';
import { send } from 'emailjs-com';
import { BsFillSendFill, BsFillSendExclamationFill, BsFillSendCheckFill, BsFillSendSlashFill } from 'react-icons/bs';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [sentError, setSentError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // const messageGenerator = () => {
  //   // List of massage suggestions with name tracking if provided by the user
  //   const messages = [
  //     `Hi Nader, \n\n${name ? `My name is ${name.split(' ')[0]} and ` : ''}I came across your portfolio while searching for a front-end web developer. I'd love to set up a time to discuss potential opportunities at our company.`,
  //     `Greetings Nader, \n\n${name ?`I'm ${name.split(' ')[0]} and ` : ''}I am impressed with your skills as a front-end web developer. Our company is looking for someone with your expertise to join our team. Would you be interested in discussing the role further?`,
  //     `Dear Nader, \n\n${name ? `My name is ${name.split(' ')[0]} and ` : ''}I am the hiring manager for a front-end web developer role at our company. I came across your portfolio and I think you would be a great fit. Would you be available to talk about the role and your experience?`];
  //   // Generate a random number between 0 and the length of the messages array to select a random message
  //   const randomNum = Math.floor(Math.random() * messages.length);
  //   // Return the message with the name if it was provided by the user
  //   return messages[randomNum] + `\n\n` + `Kind regards,` + `\n` + `${name.split(' ')[0] || ''}`;
  // }

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
    if (!name || !email || !message) {
      // Set the state of sentError to true if email or message or name are empty
      setSentError(true);
      setSent(false);
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
          <input type='text' id='name' className='contactInput' name='name' placeholder='*Name' value={name} onChange={handleNameChange} />
          <label htmlFor='email' />
          <input type='email' id='email' className='contactInput' name='email' placeholder='*Email Address' value={email} onChange={handleEmailChange} />
          <label htmlFor='subject' />
          <input type='text' id='subject' className='contactInput' name='subject' placeholder='Subject' value={subject} onChange={handleSubjectChange}/>
        </div>
        <div className='formMessage'>
          <label htmlFor='message' />
          <textarea id='message' className='contactInput' name='message' placeholder='*Message' value={message} onChange={handleMessageChange} ></textarea>
        </div>
        <div className='formFeedback'>
          {sentError && <b id='warning'>*Please fill out all required fields</b>}
          {sent && <b id='success'>Success! Thank you for reaching out!</b>}
        </div>
        <div className='submitRow'>
          {/* <button className='contactBtn' onClick={(e) => { e.preventDefault(); setMessage(messageGenerator())}}>Generate</button> */}
          <button type='submit' className='contactBtn' disabled={isLoading}> 
            Submit { sent ? <BsFillSendCheckFill size={18} /> 
              : isLoading ? <BsFillSendSlashFill size={18}/> 
              : sentError ? <BsFillSendExclamationFill size={18}/> 
              : <BsFillSendFill/> }
          </button>
        </div>
      </form>
      <p>Feel free to reach out to me at <a href='mailto:naderantar96@gmail.com'>NaderAntar96@gmail.com</a></p>
    </div>
  )
}

export default Contact;