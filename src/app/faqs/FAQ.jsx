"use client";
import { useState } from "react";
import styles from "../Style/faq.module.css";

const faqs = [
  {
    question: "How do I book my first lesson?",
    answer:
      "You can book your first lesson by calling us on +27 12 345 6789 or filling in the contact form on our Contact Us page. We will get back to you within 24 hours to confirm a time that suits you.",
  },
  {
    question: "What documents do I need to start?",
    answer:
      "You will need a valid South African ID or passport, a learner's licence (code 8 or 10), and proof of address. If you don't have a learner's licence yet, we can guide you through that process too.",
  },
  {
    question: "How many lessons will I need before the K53 test?",
    answer:
      "The number of lessons varies per person. On average, students take between 15 and 30 hours of in-car practice. Our instructors will give you an honest assessment of your readiness before you book the test.",
  },
  {
    question: "Do you offer automatic and manual car lessons?",
    answer:
      "Yes, we offer lessons in both automatic and manual (stick shift) vehicles. If you are unsure which to choose, speak to one of our instructors — we are happy to advise.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We ask for at least 24 hours' notice for cancellations. Late cancellations or no-shows may be charged the full lesson fee.",
  },
  {
    question: "Are your instructors certified?",
    answer:
      "All our instructors are registered with the Road Traffic Management Corporation (RTMC) and hold valid Professional Driving Permits (PDP) where required.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (index) => setOpen(open === index ? null : index);

  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <h1 className={styles.heading}>Frequently Asked Questions</h1>
        <p className={styles.subheading}>
          Everything you need to know before getting behind the wheel.
        </p>
      </div>

      <div className={styles.list}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.item}>
            <button
              className={styles.question}
              onClick={() => toggle(index)}
              aria-expanded={open === index}
            >
              <span>{faq.question}</span>
              <span className={styles.icon}>{open === index ? "−" : "+"}</span>
            </button>
            {open === index && (
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
