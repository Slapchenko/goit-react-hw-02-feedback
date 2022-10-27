import { Component } from 'react';
import { Statistics } from '../Statistics';
import { FeedbackOptions } from '../FeedbackOptions';
import { Section } from '../Section';
import {Notification} from '../Notification'

export class FeedbackForm extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const { name } = e.currentTarget;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = total => {
    if (total === 0) {
      return 0;
    }

    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);

    return (
      <>
        <h1>Please leave feedback</h1>
        <Section title="">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </>
    );
  }
}
