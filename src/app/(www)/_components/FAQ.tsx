'use client';

import React from 'react';
import SectionTitle from '@www/_components/SectionTitle';

import faqs, { type Question } from '@www/_data/faq';

type ItemProps = {
  item: Question;
  isActive?: boolean;
  onClick?: React.MouseEventHandler;
};

const FAQItem: React.FC<ItemProps> = ({ item, onClick, isActive = false }) => (
  <div onClick={onClick} className={`faq-item ${isActive && 'faq-active'}`}>
    <h3>{item.question}</h3>
    <div className="faq-content">
      {typeof item.answer === 'string' ? (
        <p>{item.answer}</p>
      ) : (
        item.answer.map((answer, index) => <p key={index}>{answer}</p>)
      )}
    </div>
  </div>
);

type Props = {
  id?: string;
  background?: 'light' | 'dark';
};

export function FAQ({ id, background }: Props) {
  const [activeItem, setActiveItem] = React.useState(0);

  return (
    <section
      id={id || 'faq'}
      className={`faq section ${background || 'light'}-background`}>
      <SectionTitle
        title="Frequently Asked Questions"
        subtitle="Get answers to some common questions"
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-container">
              {faqs.map((item, index) => (
                <FAQItem
                  key={index}
                  item={item}
                  isActive={activeItem == index}
                  onClick={() => setActiveItem(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
