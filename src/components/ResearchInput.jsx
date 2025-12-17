import searchIcon from "/assets/images/icon-search.svg";

const ResearchInput = ({ onIsOpen, query, onQuery }) => {
  return (
    <>
      <input
        className="rounded-12 text-preset-5-medium h-14 w-full cursor-pointer bg-neutral-700 py-4 pl-15 text-neutral-200 focus:outline-2 focus:outline-neutral-200 lg:w-131.5"
        type="text"
        placeholder="Search for a place..."
        value={query}
        onChange={(e) => {
          onQuery(e.target.value);
          onIsOpen(true);
        }}
      />
      <img
        className="absolute top-4 left-6"
        src={searchIcon}
        alt="search icon"
      />
    </>
  );
};

export default ResearchInput;
