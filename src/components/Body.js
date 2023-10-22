import { MainContentContainer } from "./MainContentContainer";
import { SideNav } from "./SideNav";

export const Body = () => {
  return (
    <div className="flex grow overflow-auto">
      <SideNav />
      <MainContentContainer />
    </div>
  );
};
