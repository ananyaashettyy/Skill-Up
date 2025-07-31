import React, { useRef, useState } from 'react';
import './Feedback.css';
import emailjs from '@emailjs/browser';

const Feedback = () => {
  const form = useRef();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a star rating.");
      return;
    }

    emailjs.sendForm(
      VITE_EMAILJS_SERVICE_ID=new_service_id,
      VITE_EMAILJS_TEMPLATE_ID=new_template_id,

      form.current,
     VITE_EMAILJS_PUBLIC_KEY=new_public_key
    ).then(
      () => {
        alert("Feedback sent successfully!");
        form.current.reset();
        setRating(0);
      },
      () => {
        alert("Failed to send feedback. Try again.");
      }
    );
  };

  return (
    <div className="feedback-page">
      <div className="feedback-container">
        <h1>Skill Up</h1>
        <h2>Rate your experience!</h2>
        <p>We would love to hear your feedback with a quick survey! Your opinion is important to us.</p>

        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= (hover || rating) ? "on" : ""}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            >
              ★
            </span>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="hidden" name="rating" value={rating} />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email ID" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Feedback..." rows="5" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
