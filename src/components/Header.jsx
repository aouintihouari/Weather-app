import logoIcon from "/assets/images/logo.svg";
import unitsIcon from "/assets/images/icon-units.svg";
import dropDownIcon from "/assets/images/icon-dropdown.svg";

const Header = ({ onShowUnits }) => {
  return (
    <header className="flex justify-between p-4 md:p-6 lg:px-40 lg:py-10">
      <img className="h-auto w-34.5 md:w-50" src={logoIcon} alt="logo" />
      <button
        onClick={() => onShowUnits((showUnits) => !showUnits)}
        className="text-neutral-0 rounded-8 md:text-preset-7 flex h-8.25 w-22.25 cursor-pointer items-center justify-center bg-neutral-800 px-4 py-3 text-[14px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.25)] focus:border-2 focus:border-white focus:outline-none md:h-10.75 md:w-29.75"
      >
        <img src={unitsIcon} alt="units icon" />
        <span className="ml-2">Units</span>
        <img className="ml-2" src={dropDownIcon} alt="dropdown icon" />
      </button>
    </header>
  );
};

export default Header;
