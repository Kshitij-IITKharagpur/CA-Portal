import React from 'react'
import styles from '../ContactUs/contact.module.css';
import './faq.css'

const data = [
  {
    "question": "What is the role of a Campus Ambassador?",
    "answer": "Campus Ambassador will represent Kshitij, IIT Kharagpur in their colleges. They will be the first point of contact to any student who requires information about Kshitij. They would promote and motivate students to participate in the events conducted by Kshitij."
  },
  {
    "question": "Am I suitable to become a Campus Ambassador?",
    "answer": "Yes. Any college student driven with enthusiasm is eligible to become a Campus Ambassador."
  },
  {
    "question": "How can I apply for the post of Campus Ambassador?",
    "answer": "Click on Sign Up and register. You will receive an email after successful registration."
  },
  {
    "question": "What is the selection process?",
    "answer": "After you register through our website, you will have to go through a short telephonic interview before being selected."
  },
  {
    "question": "How many Campus Ambassadors are usually chosen from a particular college?",
    "answer": "One or more campus ambassadors are chosen depending on the size of the college and the number of students who have applied for the position."
  },
  {
    "question": "How much time do I need to devote to Kshitij, IIT Kharagpur once selected as a Campus Ambassador?",
    "answer": "There is no particular constraint on the number of hours per week that you need to devote. It may vary depending on the number of tasks allotted and how smartly and efficiently you perform it."
  }
]

// Custom Accordion Components
const Accordion = ({ children }) => {
  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <div className="accordion-container">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: openIndex === index,
          onToggle: () => setOpenIndex(openIndex === index ? null : index),
          index
        })
      )}
    </div>
  );
};

const AccordionItem = ({ children, isOpen, onToggle, index }) => {
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { isOpen, onToggle, index })
      )}
    </div>
  );
};

const AccordionTrigger = ({ children, isOpen, onToggle }) => {
  return (
    <button
      className="accordion-trigger"
      onClick={onToggle}
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        width: '100%',
        textAlign: 'left',
        padding: '16px 0',
        color: 'white',
        fontSize: '1.8rem',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <span>{children}</span>
      <span
        style={{
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
          color: 'white'
        }}
      >
        ▼
      </span>
    </button>
  );
};

const AccordionPanel = ({ children, isOpen }) => {
  return (
    <div
      className="accordion-panel"
      style={{
        backgroundColor: 'transparent',
        maxHeight: isOpen ? '200px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease',
        padding: isOpen ? '16px 0' : '0',
        color: 'white',
        fontSize: '1.6rem',
        lineHeight: '1.6'
      }}
    >
      {children}
    </div>
  );
};

function Faq_test() {
  return (
    <div className={styles.cov}>
      <h1 className="title">FAQS</h1>
      <div className="faq_div">
        <Accordion>
          {data.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionPanel>{item.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Faq_test;
