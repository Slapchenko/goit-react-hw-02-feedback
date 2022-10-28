import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(name => (
    <button type="button" name={name} key={name} onClick={onLeaveFeedback}>
      {name}
    </button>
  ));

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
