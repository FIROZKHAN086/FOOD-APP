import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useRef} from 'react'
import './css/footer.css'
import {  Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'


const Footer = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3f0rz6c', 'template_p6kk3ai', form.current, {
        publicKey: 'YTS0Vnhi9zlJGd-ba',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
    
    

  return (
    <>    <footer  className="footer mt-5">
    <div className="footer-container">
        <div className="footer-section">
            <h2 id="About">About Us</h2>
            <p>Discover delicious recipes, cooking tips, and food articles from our passionate foodies.</p>
            <p>Make Some Delicese Food On Our Worker </p>
        </div>
        
        <div className="footer-section">
            <h2>Follow Us</h2>
            <div className="social-icons">
               <Link target='_blank'  to={"https://www.instagram.com/khan____0086/"}><FontAwesomeIcon className='h-[2em]' icon={faInstagram}/></Link>
               <Link target='_blank' to={"/"}><FontAwesomeIcon className='h-[2em]' icon={faFacebook}/></Link>
               <Link target='_blank' to={"/"}><FontAwesomeIcon className='h-[2em]' icon={faLinkedinIn}/></Link>
            </div>
        </div>
        <div id='Contact' className='footer-section'>
        <h2>Contact For Me</h2>
        <form id="subscribe-form" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className='text-black' placeholder='Enter name' type="text" name="user_name" />
      <label>Email</label>
      <input className='text-black' placeholder='Enter Email' type="email" name="user_email" required />
      <label>Message</label>
      <textarea className='text-black rounded-lg input' placeholder='Enter Your Contact details' name="message" />
      <button type="submit" className='mt-2' value={"Send"}>Submit Now</button>
    </form>
    </div>
    </div>
    <div className="footer-bottom">
        <p>&copy; 2024 FIROZKHAN. All Rights Reserved.</p>
    </div>
</footer>
</>

  )
}

export default Footer