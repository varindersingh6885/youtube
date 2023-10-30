import { Outlet } from "react-router-dom";
import { SideNav } from "./SideNav";
import { BodyBackdrop } from "./BodyBackdrop";
import { useSelector } from "react-redux";

export const Body = () => {
  const isBodyBackdropVisible = useSelector(
    (store) => store.bodyBackdrop.isVisible
  );
  const onBodyBackdropClick = useSelector(
    (store) => store.bodyBackdrop.onBackdropClick
  );

  console.log(onBodyBackdropClick);

  return (
    <div className="flex grow overflow-auto relative">
      <SideNav />
      <div className="grow p-4 h-full overflow-auto">
        <Outlet />
      </div>
      {isBodyBackdropVisible && <BodyBackdrop onClick={onBodyBackdropClick} />}
    </div>
  );
};
