import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section id='contact'>
      <h5 className="text-dark">Contact Me</h5>
      <div className="contact-container">
        <p><strong>Phone:</strong> +919293123000</p>
        <p><strong>Email:</strong> <a href="mailto:rithikavardhan7@gmail.com">rithikavardhan7@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rithika-vardhan-58b61220b" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/rithika-vardhan-58b61220b</a></p>
      </div>
    </section>
  );
}

export default Contact;
