import errorIcon from "/assets/images/icon-error.svg";
import retryIcon from "/assets/images/icon-retry.svg";

const ApiError = ({ onRetry }) => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 flex items-center justify-center">
        <span className="text-3xl text-neutral-400">
          <img className="h-16 w-16" src={errorIcon} alt="error icon" />
        </span>
      </div>
      <h2 className="text-preset-2 mb-4 text-white">Something went wrong</h2>
      <p className="text-preset-5-medium mb-8 max-w-md text-neutral-300">
        We couldn't connect to the server (API error). Please try again in a few
        moments.
      </p>
      <button
        onClick={onRetry}
        className="text-preset-7 rounded-12 flex h-12 cursor-pointer items-center gap-2 bg-neutral-800 px-6 py-2 text-white transition-colors duration-300 hover:bg-neutral-700"
      >
        <img src={retryIcon} alt="retry icon" /> Retry
      </button>
    </div>
  );
};

export default ApiError;
