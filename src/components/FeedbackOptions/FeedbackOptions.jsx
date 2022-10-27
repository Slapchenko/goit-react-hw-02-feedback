export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(name => (
    <button type="button" name={name} key={name} onClick={onLeaveFeedback}>
      {name}
    </button>
  ));
};
