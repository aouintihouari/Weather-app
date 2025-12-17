const Results = ({ isOpen, results, onSelectCity }) => {
  return (
    <>
      {isOpen && results.length > 0 && (
        <ul className="rounded-12 absolute z-50 mt-2 w-full border border-neutral-800 bg-neutral-700 p-2 shadow-xl">
          {results.map((city) => (
            <li
              key={city.id}
              onClick={() => onSelectCity(city)}
              className="cursor-pointer rounded-lg p-4 text-neutral-200 transition-colors hover:bg-neutral-700"
            >
              <span className="font-medium">{city.name}</span>
              {city.admin1 && (
                <span className="text-sm text-neutral-400">
                  , {city.admin1}
                </span>
              )}
              <span className="ml-2 text-sm text-neutral-500">
                ({city.country_code})
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Results;
