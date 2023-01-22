import { Component } from 'react';
import css from '../FeedbackOptions/feedbackOptions.module.css';
class FeedbackOptions extends Component {
  render() { 
    return (
      <div className={css.buttonMenu}>
        <h1>{this.props.title}</h1>
        <div>
          <button className={css.button} id="good" onClick={this.props.incrementGood}>
            Good
          </button>
          <button
            className={css.button}
            id="neutral"
            onClick={this.props.incrementNeutral}
          >
            Neutral
          </button>
          <button className={css.button} id="bad" onClick={this.props.incrementBad}>
            Bad
          </button>
        </div>
      </div>
    );
  }
}
export default FeedbackOptions;
