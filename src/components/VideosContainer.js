import { useEffect, useState } from "react";
import { GET_MOST_POPULAR_VIDEOS_URL } from "../utils/constants";
import { VideoCard } from "./VideoCard";

export const VideosContainer = () => {
  const [videosList, setVideosList] = useState([]);
  const getMostPopularVideos = async () => {
    const apiData = await fetch(GET_MOST_POPULAR_VIDEOS_URL);
    const videosData = await apiData.json();
    setVideosList(videosData?.items);
  };
  useEffect(() => {
    getMostPopularVideos();
  }, []);

  return (
    <div className="py-4 justify-between grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 ">
      {videosList.length
        ? videosList?.map((video) => {
            return <VideoCard key={video.id} videoInfo={video} />;
          })
        : null}
    </div>
  );
};
