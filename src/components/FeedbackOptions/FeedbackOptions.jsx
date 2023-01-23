import propTypes from 'prop-types';
import css from '../FeedbackOptions/feedbackOptions.module.css';

function FeedbackOptions(props) {
  return (
    <div className={css.buttonMenu}>
      <h1>{props.title}</h1>
      <div>
        <button className={css.button} id="good" onClick={props.incrementGood}>
          Good
        </button>
        <button
          className={css.button}
          id="neutral"
          onClick={props.incrementNeutral}
        >
          Neutral
        </button>
        <button className={css.button} id="bad" onClick={props.incrementBad}>
          Bad
        </button>
      </div>
    </div>
  );
}

FeedbackOptions.propTypes = {
  incrementGood: propTypes.func,
  incrementNeutral: propTypes.func,
  incrementBad: propTypes.func,
  title: propTypes.string,
};

export default FeedbackOptions;
