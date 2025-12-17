import loadingIcon from "/assets/images/icon-loading.svg";

const LoadingResults = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <ul className="rounded-12 absolute z-50 mt-2 w-full border border-neutral-700 bg-neutral-800 p-2 shadow-xl">
          <li className="flex gap-5">
            <img className="animation-spin" src={loadingIcon} />
            Search in progress
          </li>
        </ul>
      )}
    </>
  );
};

export default LoadingResults;
