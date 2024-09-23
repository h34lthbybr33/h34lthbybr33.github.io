'use client';

import React from 'react';

import { Section, SectionBackground, SectionTitle } from '.';
import { Accordion } from 'react-bootstrap';

export interface FAQProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  background?: SectionBackground;
  questions: {
    title: string;
    body: React.ReactNode;
  }[];
}

const FAQ: React.FC<FAQProps> = ({ id, background, className, questions, ...props }) => {
  return (
    <Section id={id} name="faq" background={background} className={className} {...props}>
      <SectionTitle title="Frequently Asked Questions" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <Accordion className="faq-content">
              {questions.map((question, key) => (
                <Accordion.Item eventKey={`${key}`} key={key}>
                  <Accordion.Header className="faq-item">
                    {question.title}
                  </Accordion.Header>
                  <Accordion.Body className="faq-content">{question.body}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </Section>
  );
};

FAQ.displayName = 'FAQ';

export default FAQ;
