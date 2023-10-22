import { Outlet } from "react-router-dom";
import { SideNav } from "./SideNav";

export const Body = () => {
  return (
    <div className="flex grow overflow-auto">
      <SideNav />
      <div className="grow p-4 h-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};
