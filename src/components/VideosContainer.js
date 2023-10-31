import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  GET_MOST_POPULAR_VIDEOS_URL,
  GET_VIDEOS_FOR_QUERY_WORD,
} from "../utils/constants";
import { VideoCard } from "./VideoCard";

export const VideosContainer = () => {
  const [videosList, setVideosList] = useState([]);
  const searchQuery = useSelector((store) => store.videoSearchQuery.query);
  const [isVideoListLoading, setIsVideoListLoading] = useState(false);

  const getMostPopularVideos = async () => {
    setIsVideoListLoading(true);
    const apiData = await fetch(GET_MOST_POPULAR_VIDEOS_URL);
    const videosData = await apiData.json();
    setVideosList(videosData?.items);
    setIsVideoListLoading(false);
  };

  const getVideosForSearchQuery = async (query) => {
    setIsVideoListLoading(true);
    const apiData = await fetch(GET_VIDEOS_FOR_QUERY_WORD + query);
    const videosData = await apiData.json();
    setVideosList(videosData?.items);
    setIsVideoListLoading(false);
  };

  useEffect(() => {
    setVideosList([]);
    if (searchQuery) {
      getVideosForSearchQuery(searchQuery);
    } else {
      getMostPopularVideos();
    }
  }, [searchQuery]);

  return (
    <>
      {isVideoListLoading && (
        <h2 className="text-blue-400 text-xl text-center py-4">Loading...</h2>
      )}
      <div className="py-4 justify-between grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 ">
        {videosList.length
          ? videosList?.map((video) => {
              return <VideoCard key={video.id} videoInfo={video} />;
            })
          : null}
      </div>
    </>
  );
};
