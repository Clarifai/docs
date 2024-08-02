import React, { ReactNode, useState } from 'react';
import styles from './feedback.module.css';
export const Feedback = ({ metadata }) => {
  const [rating, setRating] = useState(null);
  const [notes, setNotes] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const [hoveredScore, setHoveredScore] = useState(null);
  const [textAreaLabel, setTextAreaLabel] = useState(null);
  const [textAreaPlaceholder, setTextAreaPlaceholder] = useState('This section is optional ✌️');
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const submitDisabled = rating === null || (rating < 4 && (notes === null || notes === ''));

  const scores = [1, 2, 3, 4, 5];

  const handleSubmit = async () => {
    if (rating === null) {
      setErrorText('Please select a score.');
      return;
    }

    if (rating < 4 && notes === null) {
      setErrorText(
        "Because this doc wasn't up to scratch please provide us with some feedback of where we can improve."
      );
      return;
    }

    try {
      window.gtag('event', 'submit_feedback', {
        label: 'Responded to Did You Find This Page Helpful',
        response: rating >= 4 ? 'YES' : 'NO',
        pageUrl: window.location.href,
        notes,
        rating,
      })
    } catch (e) {
      console.error('Failed to send feedback event to Google Analytics');
      console.error(e);
    }

    setNotes(null);
    setIsSubmitSuccess(true);

    return;
  };

  const handleScoreClick = (scoreItem) => {
    if (scoreItem === rating) {
      setRating(null);
      setErrorText(null);
      setHoveredScore(null);
      return;
    }
    setErrorText(null);
    setRating(scoreItem);
    if (scoreItem < 4) {
      setTextAreaLabel(
        <>
          <p>What can we do to improve it? Please be as detailed as you like.</p>
          <p>Real human beings read every single review.</p>
        </>
      );
      setTextAreaPlaceholder('This section is required... how can we do better? ✍️');
    }
    if (scoreItem >= 4) {
      setTextAreaLabel(
        <>
          <p>Any general feedback you'd like to add?</p>
          <p>We'll take it all... tell us how well we're doing or where we can improve.</p>
          <p>Real human beings read every single review.</p>
        </>
      );
      setTextAreaPlaceholder('This section is optional ✌️');
    }
  };


  return (
    <div className={styles.feedback} id={'feedback'}>
      <div className={styles.form}>
        <div>
          <h3>What did you think of this doc?</h3>
          {isSubmitSuccess ? (
            <div className={styles.successMessage}>
              <p>Thanks for your feedback.</p>
              {rating >= 3 ? (
                <p>Feel free to review as many docs pages as you like!</p>
              ) : (
                <p>
                  If you need help with the issue that led to this low score, you can create a{' '}
                  <a
                    href="https://github.com/clarifai/docs/issues/new/choose"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub issue
                  </a>{' '}
                  if you think this is a bug, or check out our{' '}
                  <a href="https://discord.gg/WgUvPK4pVD" target="_blank" rel="noopener noreferrer">
                    Discord server
                  </a>
                  , where our team and community users are ready to engage.
                </p>
              )}
            </div>
          ) : (
            <div className={styles.numberRow} style={{display: "flex", flexDirection: "row", marginTop: "15px", height: "45px", justifyContent: "center"}}>
              {scores.map((star, index) => (
                <div
                  className={styles.star}
                  key={star}
                  onClick={() => handleScoreClick(star)}
                  onMouseEnter={() => setHoveredScore(index + 1)}
                  onMouseLeave={() => setHoveredScore(-1)}
                >
                  {rating >= star ? (
                    <svg width="36" height="36" viewBox="0 0 24 24">
                      <path
                        fill="#ffc107"
                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      />
                    </svg>
                  ) : (
                    <svg width="36" height="36" viewBox="0 0 24 24">
                      <path
                        fill={hoveredScore > index ? '#ffc107' : '#B1BCC7'}
                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div style={!isSubmitSuccess ? { display: 'block' } : { display: 'none' }}>
          <div className={styles.textAreaLabel}>{textAreaLabel}</div>
          <textarea
            className={styles.textarea}
            value={notes ?? ''}
            placeholder={textAreaPlaceholder ?? ''}
            rows={5}
            onChange={e => setNotes(e.target.value)}
          />
          <div className={styles.errorAndButton}>
            <p className={styles.errorText}>{errorText}</p>
            <div className={styles.buttonContainer}>
              <button className={submitDisabled ? styles.buttonDisabled : ''} onClick={() => handleSubmit()}>
                Send your review!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
