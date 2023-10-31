import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebarMenu } from "../utils/redux-store/appSlice";
import { useEffect } from "react";
import { VideoComments } from "./VideoComments";

export const WatchVideoPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeSidebarMenu());
  }, [dispatch]);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <VideoComments videoId={videoId} />
    </div>
  );
};
