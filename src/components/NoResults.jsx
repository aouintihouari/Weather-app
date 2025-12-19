const NoResults = ({ isLoading, query, results }) => {
  return (
    <>
      {!isLoading && query.length >= 2 && results.length === 0 && (
        <div className="mt-10 text-center">
          <p className="text-preset-4 font-bold text-white">
            No search result found!
          </p>
        </div>
      )}
    </>
  );
};

export default NoResults;
