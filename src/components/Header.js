import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebarMenu } from "../utils/redux-store/appSlice";
import HamburgerIcon from "../images/icon-hamburger.png";
import YoutubeIcon from "../images/icon-youtube-label.png";
import UserIcon from "../images/icon-user.png";
import { Link } from "react-router-dom";
import { GET_SEARCH_SUGGESTIONS } from "../utils/constants";
import {
  toggleBodyBackdrop,
  closeBodyBackdrop,
  openBodyBackdrop,
  setBackdropClickHandler,
} from "../utils/redux-store/bodyBackdropSlice";

export const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [shouldFetchSuggestions, setShouldFetchSuggestions] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearchInputFocused, setIsSearchInputFocused] = useState(false);
  const dispatch = useDispatch();

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    setShouldFetchSuggestions(true);
  };

  const toggleSidebarMenuHandler = () => {
    dispatch(toggleSidebarMenu());
  };

  const fetchSearchSuggestions = async () => {
    // const data = await fetch(GET_SEARCH_SUGGESTIONS + searchInput);
    // const json = await data.json();
    // const suggestions = json?.suggestions?.map((suggestion) => {
    //   return suggestion?.value;
    // });

    // setSearchSuggestions(suggestions);

    const suggestions = ["iphone", "iphone 15", "iphone 14 pro", "iphone red"];

    setSearchSuggestions(suggestions);

    if (suggestions?.length) {
      dispatch(openBodyBackdrop());
    }
  };

  const handleSearchInputOnFocus = () => {
    setShowSuggestions(true);
    setIsSearchInputFocused(true);
    !!searchInput && fetchSearchSuggestions();
  };
  // const handleSearchInputOnBlur = () => {
  // setTimeout(() => {
  //   setSearchSuggestions([]);
  //   setShowSuggestions(false);
  // }, 500);
  // };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput && shouldFetchSuggestions && isSearchInputFocused) {
        console.log(searchInput, shouldFetchSuggestions);
        fetchSearchSuggestions();
      } else {
        setSearchSuggestions([]);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      setSearchSuggestions([]);
    };
  }, [searchInput, shouldFetchSuggestions, isSearchInputFocused]);

  useEffect(() => {
    console.log("seting handler backdrop click");
    dispatch(
      setBackdropClickHandler({
        handler: () => {
          setIsSearchInputFocused(false);
          setShowSuggestions(false);
          setShouldFetchSuggestions(false);
          setSearchSuggestions([]);
          dispatch(closeBodyBackdrop());
        },
      })
    );
  }, []);

  const handleSuggestionSelect = (suggestion) => {
    setIsSearchInputFocused(false);
    setShowSuggestions(false);
    setShouldFetchSuggestions(false);
    setSearchSuggestions([]);
    setSearchInput(suggestion);
    dispatch(toggleBodyBackdrop());
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

      <div className="col-span-8 text-center">
        <div className="inline-block relative sm:w-2/3 lg:w-10/12">
          <input
            className="py-2 px-5 rounded-l-full border border-gray-300 w-full outline-none"
            placeholder="Search"
            value={searchInput}
            onChange={handleSearchInput}
            // onBlur={handleSearchInputOnBlur}
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
