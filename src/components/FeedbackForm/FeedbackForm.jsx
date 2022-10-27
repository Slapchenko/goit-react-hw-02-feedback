import { Component } from 'react';

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
    
    return (Math.round((this.state.good  / total) * 100));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(total);

    return (
      <>
        <p>Please leave feedback</p>
        <button type="button" name="good" onClick={this.handleIncrement}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.handleIncrement}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.handleIncrement}>
          Bad
        </button>
        <p>Statistics</p>
        <p>
          Good:<span>{good}</span>
        </p>
        <p>
          Neutral:<span>{neutral}</span>
        </p>
        <p>
          Bad:<span>{bad}</span>
        </p>
        <p>
          Total:<span>{total}</span>
        </p>
        <p>
          Positive feedback:<span>{percentage}%</span>
        </p>
      </>
    );
  }
}
