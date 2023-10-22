import { ButtonList } from "./ButtonList";
import { VideosContainer } from "./VideosContainer";
export const MainContentContainer = () => {
  return (
    <div className="grow p-4 h-full overflow-auto">
      <ButtonList />

      <VideosContainer />
    </div>
  );
};
