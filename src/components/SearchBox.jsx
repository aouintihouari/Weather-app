import { Button } from "./";

const SearchBox = ({ children }) => {
  return (
    <div className="relative w-full">
      <h1 className="text-preset-2 text-neutral-0 my-10 text-center md:mx-40">
        How’s the sky looking today?
      </h1>
      <form
        className="flex flex-col justify-center gap-5 px-3 md:w-full md:flex-row md:justify-start lg:mx-auto lg:justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative md:w-full lg:w-auto">{children}</div>
        <Button />
      </form>
    </div>
  );
};

export default SearchBox;
