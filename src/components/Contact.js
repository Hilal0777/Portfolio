import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { name, email, message };

        axios
            .post('http://localhost:5000/send-email', formData)
            .then((response) => {
                console.log(response.data);
                setSubmissionStatus('success');
            })
            .catch((error) => {
                console.error('Error:', error);
                setSubmissionStatus('error');
            });

        // Clear the form after submission
        setName('');
        setEmail('');
        setMessage('');
    };

    const renderConfirmationMessage = () => {
        if (submissionStatus === 'success') {
            return (
                <div className="confirmation-message success">
                    Your message has been successfully submitted.
                </div>
            );
        } else if (submissionStatus === 'error') {
            return (
                <div className="confirmation-message error">
                    Sorry, an error occurred. Please try again later.
                </div>
            );
        } else {
            return null;
        }
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <p>You can reach out to me via email or through social media.</p>
            {renderConfirmationMessage()}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Contact;
