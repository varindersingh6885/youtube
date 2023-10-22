import { useSelector } from "react-redux";

export const SideNav = () => {
  const isSidebarMenuOpen = useSelector((store) => store.app.isSidebarMenuOpen);

  if (!isSidebarMenuOpen) {
    return null;
  }

  return (
    <div className="py-2 px-4 border-r-2 basis-40">
      <div className="py-2 border-b">
        <ul className="pl-2 ">
          <li>Home</li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Movies</li>
        </ul>
      </div>
      <div className="py-2">
        <h2 className="font-semibold mb-1">Explore</h2>
        <ul className="pl-2">
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Live</li>
        </ul>
      </div>
    </div>
  );
};
