import { useState, useEffect, useRef } from "react";

import dropDownIcon from "/assets/images/icon-dropdown.svg";

const DayDropdown = ({ days, selectedDay, onSelectDay }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-neutral-0 flex cursor-pointer items-center gap-2 rounded-lg border-2 border-neutral-800 bg-neutral-600 px-4 py-2 text-sm font-medium transition-colors"
      >
        <span>{formatDate(selectedDay)}</span>
        <img src={dropDownIcon} />
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 z-50 mt-2 h-78.25 w-53.5 overflow-hidden rounded-xl bg-[#232334] shadow-xl ring-1 ring-white/10">
          <ul className="flex flex-col gap-1 px-2 py-1">
            {days.map((day, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    onSelectDay(day);
                    setIsOpen(false);
                  }}
                  className={`rounded-8 text-preset-7 text-neutral-0 h-9.75 w-full cursor-pointer px-4 py-2.5 text-left transition-colors hover:bg-neutral-700/50 ${
                    day.toDateString() === selectedDay.toDateString()
                      ? "text-neutral-0 bg-neutral-700 font-semibold"
                      : "text-neutral-0"
                  }`}
                >
                  {formatDate(day)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DayDropdown;
