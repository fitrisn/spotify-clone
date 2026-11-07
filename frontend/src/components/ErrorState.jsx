
function ErrorState({ message, onRetry }) {
  return (
    <div className="state-message">
      <p className="error-message">{message}</p>

      <button className="retry-button" onClick={onRetry}>
        Try Again
      </button>
    </div>
  );
}

export default ErrorState;
