import React, { useState } from 'react';
import "./Contact.css";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can implement logic to send the form data to your server or email

        // For demonstration purposes, we'll just show a success message
        setSuccessMessage('Message sent successfully!');

        // Clear the form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div id='contact'>
            <div className='contact'>
                <div className='text-box'>
                    <p>-lets connect</p>
                    <h2>Get in touch</h2>
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    <p className='body'>I'm currently available to take on new projects. So feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7</p>
                    <div className='basic-contact'>
                        <span>+8801739 184393</span>
                        <span>nafiulhaque22@gmail.com</span>
                        <span>Ranu Villa,Gabtali,Bogura,Bangladesh</span>
                    </div>
                </div>
                <div className="contact-form">

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
