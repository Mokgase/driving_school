'use client';

import { useState } from 'react';
import { programs } from '../Utils/programs';
import Button from '../Components/Button';
import styles from '../Style/book.module.css';

const TIME_SLOTS = [
  '08:00', '09:00', '10:00', '11:00',
  '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
];

const today = new Date().toISOString().split('T')[0];

export default function BookingForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    program: '',
    notes: '',
  });
  const [showPopup, setShowPopup] = useState(false);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowPopup(true);
  }

  function handleClose() {
    setShowPopup(false);
    setForm({ firstName: '', lastName: '', email: '', phone: '', date: '', time: '', program: '', notes: '' });
  }

  return (
    <>
    {showPopup && (
      <div className={styles.overlay} role="dialog" aria-modal="true">
        <div className={styles.popup}>
          <div className={styles.popupIcon}>🎉</div>
          <h2>Booking Successful!</h2>
          <p>
            Thank you, <strong>{form.firstName}</strong>! Your lesson request for{' '}
            <strong>{form.date}</strong> at <strong>{form.time}</strong> has been received.
            <br />We&apos;ll confirm via email or phone within 24 hours.
          </p>
          <button className={styles.popupClose} onClick={handleClose}>
            DONE
          </button>
        </div>
      </div>
    )}
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Lesson Details</h2>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Jane"
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Doe"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+27 81 234 5678"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="date">Preferred Date</label>
          <input
            id="date"
            name="date"
            type="date"
            min={today}
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="time">Preferred Time</label>
          <select
            id="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          >
            <option value="">Select a time</option>
            {TIME_SLOTS.map(slot => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="program">Lesson Type</label>
        <select
          id="program"
          name="program"
          value={form.program}
          onChange={handleChange}
          required
        >
          <option value="">Select a program</option>
          {programs.map(p => (
            <option key={p.title} value={p.title}>{p.title}</option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="notes">Additional Notes (optional)</label>
        <textarea
          id="notes"
          name="notes"
          placeholder="Any specific concerns or requirements..."
          value={form.notes}
          onChange={handleChange}
        />
      </div>

      <div className={styles.submitWrapper}>
        <Button type="submit" text="CONFIRM BOOKING" />
      </div>
    </form>
    </>
  );
}
