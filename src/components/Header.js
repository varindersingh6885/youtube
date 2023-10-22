import HamburgerIcon from "../images/icon-hamburger.png";
import YoutubeIcon from "../images/icon-youtube-label.png";
import UserIcon from "../images/icon-user.png";

export const Header = () => {
  return (
    <header className="p-4 grid grid-flow-col shadow-md">
      <div className="flex col-span-2 items-center">
        <img
          className="h-8 cursor-pointer"
          src={HamburgerIcon}
          alt="icon-menu"
        />
        <img
          className="h-8 mx-3 cursor-pointer"
          src={YoutubeIcon}
          alt="icon-youtube"
        />
      </div>

      <div className="col-span-8 text-center">
        <input
          className="py-2 px-5 rounded-l-full border border-gray-300 w-1/2 outline-none"
          placeholder="Search"
        />
        <button className="border border-gray-300 py-2 px-4 rounded-r-full bg-gray-200">
          Search
        </button>
      </div>

      <div className="col-span-2 flex items-center justify-end">
        <img className="h-8" alt="icon-user" src={UserIcon} />
      </div>
    </header>
  );
};
