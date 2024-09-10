export type Question = {
  question: string;
  answer: string | string[];
};

export type FrequentQuestions = Question[];

export const faqs: FrequentQuestions = [
  {
    question: 'What is an Health Maintenance Organization (HMO)?',
    answer:
      "A type of health insurance plan that usually limits coverage to care from doctors who work for or contract with the HMO. It generally won't cover out-of-network care except in an emergency. An HMO may require you to live or work in its service area to be eligible for coverage. HMOs often provide integrated care and focus on prevention and wellness.",
  },
  {
    question: 'What is a Preferred Provider Organization (PPO)?',
    answer:
      'A type of health plan that contracts with medical providers, such as hospitals and doctors, to create a network of participating providers. You pay less if you use providers that belong to the plan’s network. You can use doctors, hospitals, and providers outside of the network for an additional cost.',
  },
  {
    question: 'What is a High Deductible Health Plan (HDHP)?',
    answer: [
      'A plan with a higher deductible than a traditional insurance plan. The monthly premium is usually lower, but you pay more health care costs yourself before the insurance company starts to pay its share (also called your deductible).',
      'A high deductible plan can be combined with a health savings account (HSA), for you to pay for certain medical expenses with money you set aside in your tax-free HSA. This is why it’s more commonly called an HSA-eligible plan.',
    ],
  },
  {
    question: 'What is a deductable?',
    answer: [
      'The amount you pay for covered health care services before your insurance plan starts to pay. With a $2,000 deductible, for example, you pay the first $2,000 of covered services yourself.',
      'After you pay your deductible, you usually pay only a copayment or coinsurance for covered services. Your insurance company pays the rest.',
    ],
  },
  {
    question: 'What is a copayment?',
    answer: [
      "A fixed amount ($20, for example) you pay for a covered health care service after you've paid your deductible.",
      'Copayments (sometimes called "copays") can vary for different services within the same plan, like drugs, lab tests, and visits to specialists.',
    ],
  },
  {
    question: 'What is a Flexible Spending Account (FSA)?',
    answer: [
      'An arrangement through your employer that lets you pay for many out-of-pocket medical expenses with tax-free dollars. Allowed expenses include insurance copayments and deductibles, qualified prescription drugs, insulin, and medical devices.',
      "You decide how much to put in an FSA, up to a limit set by your employer. You aren't taxed on this money.",
    ],
  },
  {
    question: 'What is Health Savings Account (HSA)?',
    answer: [
      'A type of savings account that lets you set aside money on a pre-tax basis to pay for qualified medical expenses. By using untaxed dollars in an HSA to pay for deductibles, copayments, coinsurance, and some other expenses, you may be able to lower your out-of-pocket health care costs. HSA funds generally may not be used to pay premiums.',
      'While you can use the funds in an HSA at any time to pay for qualified medical expenses, you may contribute to an HSA only if you have an HSA-eligible plan (sometimes called a High Deductible Health Plan (HDHP)) — generally a health plan (including a Marketplace plan) that only covers preventive services before the deductible. An HSA may earn interest or other earnings, which are not taxable. Banks, credit unions, and other financial institutions offer HSAs.',
    ],
  },
];

export default faqs;
