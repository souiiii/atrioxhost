import Heading from './Heading.jsx'
import styles from './FaqSection.module.css';
import FAQ from './FAQ.jsx';
import { useState } from 'react';

const faqs = [
  {
    question: "Why should I choose Atrioxhosting?",
    answer:
      "We offer the most reliable game server hosting at the best prices you'll find anywhere. We've deployed over 100,000 servers since 2017, backed  by 1700+ 4 and 5 star reviews. Don't believe us? Try your server risk  free with our 48 hour refund guarantee.",
  },
  {
    question: "How fast will support respond?",
    answer:
      "We offer the most reliable game server hosting at the best prices you'll find anywhere. We've deployed over 100,000 servers since 2017, backed  by 1700+ 4 and 5 star reviews. Don't believe us? Try your server risk  free with our 48 hour refund guarantee.",
  },
  {
    question: "Can I upgrade my server hosting later?",
    answer:
      "We offer the most reliable game server hosting at the best prices you'll find anywhere. We've deployed over 100,000 servers since 2017, backed  by 1700+ 4 and 5 star reviews. Don't believe us? Try your server risk  free with our 48 hour refund guarantee.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer the most reliable game server hosting at the best prices you'll find anywhere. We've deployed over 100,000 servers since 2017, backed  by 1700+ 4 and 5 star reviews. Don't believe us? Try your server risk  free with our 48 hour refund guarantee.",
  },
  {
    question: "How much professionalism can I expect?",
    answer:
      "We offer the most reliable game server hosting at the best prices you'll find anywhere. We've deployed over 100,000 servers since 2017, backed  by 1700+ 4 and 5 star reviews. Don't believe us? Try your server risk  free with our 48 hour refund guarantee.",
  },
];

export default function FaqSection() {
    const [display, setDisplay] = useState(0);

  return <div className={styles.parent}>
    <Heading>FREQUENTLY ASKED QUESTIONS</Heading>
    <div className={styles.faqs}>
        {faqs.map((f,i)=><FAQ key={i} index={i} question={f.question}  setDisplay={setDisplay} display={display} answer={f.answer}/>)}
    </div>
  </div>;
}