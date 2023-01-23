import css from '../Notification/notification.module.css';
import propTypes from 'prop-types';

function Notification(props) {
  return (
    <div className={css.notification} id="notification">
      <div>{props.message}</div>
    </div>
  );
}

export default Notification;

Notification.propTypes = {
  message: propTypes.string,
};
