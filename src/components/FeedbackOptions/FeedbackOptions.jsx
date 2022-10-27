export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(name => (
    <button type="button" name={name} key={name} onClick={onLeaveFeedback}>
      {name}
    </button>
  ));
