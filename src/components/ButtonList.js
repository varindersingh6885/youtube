export const ButtonList = () => {
  return (
    <div className="flex whitespace-nowrap overflow-auto py-1">
      {buttonList?.map((btn, index) => {
        return (
          <button
            key={index}
            className="border mr-2 px-3 py-1 rounded-md bg-gray-300 border-gray-300"
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
    name: "All",
  },
  {
    name: "Music",
  },
  {
    name: "Sidhu Moosewala",
  },
  {
    name: "Vijah",
  },
  {
    name: "Bollywood",
  },
  {
    name: "Arijit Singh",
  },
  {
    name: "T-Series",
  },
  {
    name: "Game shows",
  },
  {
    name: "Filmi",
  },
  {
    name: "Indian pop music",
  },
];
