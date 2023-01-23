import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => {
    setGood(good + 1);
  };

  const incrementNeutral = () => {
    setNeutral(neutral + 1);
  };

  const incrementBad = () => {
    setBad(bad + 1);
  };

  const countTotalFeedback = () => {
    const totalNumber = good + neutral + bad;
    return totalNumber;
  };

  const countPositivePercentage = () => {
    const totalNumber = countTotalFeedback();
    const positivePercent = Math.round((good / totalNumber) * 100);
    return positivePercent;
  };

  return (
    <div>
      <Section title={'Feedback App'}>
        <FeedbackOptions
          incrementGood={incrementGood}
          incrementNeutral={incrementNeutral}
          incrementBad={incrementBad}
          title={'Please leave Feedback'}
        />
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalNumber={countTotalFeedback}
            positivePercent={countPositivePercentage}
          />
        ) : (
          <Notification message={'There is no Feedback'} />
        )}
      </Section>
    </div>
  );
}

export default App;
