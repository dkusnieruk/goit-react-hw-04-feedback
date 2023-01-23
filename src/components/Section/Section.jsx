import css from '../Section/section.module.css';
import propTypes from 'prop-types';

function Section(props) {
  return (
    <>
      <h1 className={css.title}>{props.title}</h1>
      <div>{props.children}</div>
    </>
  );
}

export default Section;

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};
