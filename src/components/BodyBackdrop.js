export const BodyBackdrop = ({ onClick }) => {
  return (
    <div
      className="w-full h-full absolute top-0 left-0 bg-gray-400 opacity-50"
      onClick={onClick}
    ></div>
  );
};
