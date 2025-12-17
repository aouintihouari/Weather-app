import checkMarkIcon from "/public/assets/images/icon-checkmark.svg";

const Units = ({ showUnits, switchUnits, onSwitchUnits }) => {
  return (
    <>
      {showUnits && (
        <nav className="text-preset-7 rounded-12 absolute top-[8%] right-[8%] h-103 w-53.5 border border-neutral-600 bg-neutral-800 px-2 py-1.5 text-white shadow-[0_4px_10px_0px_rgba(0,0,0,0.25)] lg:top-[10%] lg:right-[10%]">
          <button
            onClick={() => onSwitchUnits((units) => !units)}
            className="rounded-8 flex h-9.75 w-49.5 cursor-pointer items-center p-2 hover:bg-neutral-700 focus:border-2 focus:border-white focus:outline-none"
          >
            {switchUnits ? "Switch to Metric" : "Switch to Imperial"}
          </button>
          <div className="mb-1 flex h-px w-full items-center bg-neutral-600"></div>
          <p className="text-preset-8 flex h-5.75 items-center p-2 text-neutral-300">
            Temperature
          </p>
          <ul className="p-2">
            <li
              className={`${!switchUnits && "bg-neutral-700"} rounded-8 flex h-9.75 w-48 items-center justify-between pr-4`}
            >
              <span>Celsius (°C)</span>
              {!switchUnits && (
                <img src={checkMarkIcon} alt="check mark icon" />
              )}
            </li>
            <li
              className={`${switchUnits && "bg-neutral-700"} rounded-8 flex h-9.75 w-48 items-center justify-between pr-4`}
            >
              <span>Fahrenheit (°F)</span>
              {switchUnits && <img src={checkMarkIcon} alt="check mark icon" />}
            </li>
          </ul>
          <div className="mb-1 h-px w-full bg-neutral-600"></div>
          <p className="text-preset-8 flex h-5.75 items-center p-2 text-neutral-300">
            Wind Speed
          </p>
          <ul className="p-2">
            <li
              className={`${!switchUnits && "bg-neutral-700"} rounded-8 flex h-9.75 w-48 items-center justify-between pr-4`}
            >
              <span>km/h</span>
              {!switchUnits && (
                <img src={checkMarkIcon} alt="check mark icon" />
              )}
            </li>
            <li
              className={`${switchUnits && "bg-neutral-700"} rounded-8 flex h-9.75 w-48 items-center justify-between pr-4`}
            >
              <span>mph</span>
              {switchUnits && <img src={checkMarkIcon} alt="check mark icon" />}
            </li>
          </ul>
          <div className="mb-1 h-px w-full bg-neutral-600"></div>
          <p className="text-preset-8 flex h-5.75 items-center p-2 text-neutral-300">
            Precipitation
          </p>
          <ul className="p-2">
            <li
              className={`${!switchUnits && "bg-neutral-700"} rounded-8 flex h-9.75 w-48 items-center justify-between pr-4`}
            >
              <span>Millimeters (mm)</span>
              {!switchUnits && (
                <img src={checkMarkIcon} alt="check mark icon" />
              )}
            </li>
            <li
              className={`${switchUnits && "bg-neutral-700"} rounded-8 flex h-9.75 w-48 items-center justify-between pr-4`}
            >
              <span>Inches (in)</span>
              {switchUnits && <img src={checkMarkIcon} alt="check mark icon" />}
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Units;
