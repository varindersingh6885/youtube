import { useDispatch } from "react-redux";
import { setSearchQuery } from "../utils/redux-store/videoSearchQuerySlice";

export const ButtonList = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex whitespace-nowrap overflow-auto py-1">
      {buttonList?.map((btn, index) => {
        return (
          <button
            key={index}
            className="border mr-2 px-3 py-1 rounded-md bg-gray-300 border-gray-300"
            onClick={() => dispatch(setSearchQuery({ query: btn.value }))}
          >
            {btn.name}
          </button>
        );
      })}
    </div>
  );
};

const buttonList = [
  {
    name: "Most Popular",
    value: "",
  },
  {
    name: "Music",
    value: "Music",
  },
  {
    name: "Sidhu Moosewala",
    value: "Sidhu Moosewala",
  },
  {
    name: "Vijah",
    value: "Vijah",
  },
  {
    name: "Bollywood",
    value: "Bollywood",
  },
  {
    name: "Arijit Singh",
    value: "Arijit Singh",
  },
  {
    name: "T-Series",
    value: "T-Series",
  },
  {
    name: "Game shows",
    value: "Game shows",
  },
  {
    name: "Filmi",
    value: "Filmi",
  },
];
