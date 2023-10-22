import { MainContentContainer } from "./MainContentContainer";
import { SideNav } from "./SideNav";

export const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <SideNav />
      <MainContentContainer />
    </div>
  );
};
