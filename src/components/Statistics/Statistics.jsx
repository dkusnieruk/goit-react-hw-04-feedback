import css from '../Statistics/statistics.module.css';
import propTypes from 'prop-types';

function Statistics(props) {
  return (
    <div className={css.statisticsMenu}>
      <h1>Statistics</h1>
      <ul className={css.statisticsList}>
        <li className={css.statisticsSingle}>Good : {props.good}</li>
        <li className={css.statisticsSingle}>Neutral: {props.neutral}</li>
        <li className={css.statisticsSingle}>Bad: {props.bad}</li>
        <li className={css.statisticsSingle}>Total: {props.totalNumber()}</li>
        <li className={css.statisticsSingle}>
          Positive percentage: {props.positivePercent()} %
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  positivePercent: propTypes.func,
  totalNumber: propTypes.func,
};

export default Statistics;
