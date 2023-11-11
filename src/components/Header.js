import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSidebarMenu } from "../utils/redux-store/appSlice";
import HamburgerIcon from "../images/icon-hamburger.png";
import YoutubeIcon from "../images/icon-youtube-label.png";
import UserIcon from "../images/icon-user.png";
import { Link } from "react-router-dom";
import { setSearchQuery } from "../utils/redux-store/videoSearchQuerySlice";
import { GET_SEARCH_SUGGESTIONS } from "../utils/constants";

export const Header = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearchInputFocused, setIsSearchInputFocused] = useState(false);
  const dispatch = useDispatch();

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const toggleSidebarMenuHandler = () => {
    dispatch(toggleSidebarMenu());
  };

  const fetchSearchSuggestions = async () => {
    const data = await fetch(GET_SEARCH_SUGGESTIONS + searchInput);
    const json = await data.json();
    const suggestions = json?.suggestions?.map((suggestion) => {
      return suggestion?.value;
    });

    setSearchSuggestions(suggestions);

    setSearchSuggestions(suggestions);
  };

  const handleSearchInputOnFocus = () => {
    setIsSearchInputFocused(true);
    setShowSuggestions(true);
    !!searchInput && fetchSearchSuggestions();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput && isSearchInputFocused) {
        fetchSearchSuggestions();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput, isSearchInputFocused]);

  const handleSuggestionSelect = (suggestion) => {
    setSearchInput(suggestion);
    navigate("./");
    setIsSearchInputFocused(false);
    setSearchSuggestions([]);
    dispatch(setSearchQuery({ query: suggestion }));
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("./");
    dispatch(setSearchQuery({ query: searchInput }));
  };

  return (
    <header className="p-4 grid grid-flow-col shadow-md">
      <div className="flex col-span-2 items-center">
        <img
          className="h-8 cursor-pointer"
          src={HamburgerIcon}
          alt="icon-menu"
          onClick={toggleSidebarMenuHandler}
        />
        <Link to={"./"}>
          <img
            className="h-8 mx-3 cursor-pointer"
            src={YoutubeIcon}
            alt="icon-youtube"
          />
        </Link>
      </div>

      <form className="col-span-8 text-center" onSubmit={onSearchSubmit}>
        <div className="inline-block relative sm:w-2/3 lg:w-10/12">
          <input
            className="py-2 px-5 rounded-l-full border border-gray-300 w-full outline-none"
            placeholder="Search"
            value={searchInput}
            onChange={handleSearchInput}
            onFocus={handleSearchInputOnFocus}
            id="search-input"
          />
          {showSuggestions && searchSuggestions?.length ? (
            <ul className="absolute w-full border border-gray-300 rounded-lg bg-white text-left py-2 max-h-[70vh] overflow-auto z-10">
              {searchSuggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 px-4 border-b-2 text-sm hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSuggestionSelect(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <button
          className="border border-gray-300 py-2 px-4 rounded-r-full bg-gray-200"
          type="submit"
        >
          Search
        </button>
      </form>

      <div className="col-span-2 flex items-center justify-end">
        <img className="h-8" alt="icon-user" src={UserIcon} />
      </div>
    </header>
  );
};
