import { Link } from "react-router-dom";
export const VideoCard = ({ videoInfo }) => {
  const { statistics, snippet } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="border shadow-sm shadow-gray-300 border-gray-300 rounded-lg pb-4">
      <Link to={`watch?v=${videoInfo?.id}`} className="cursor-pointer">
        <div className="">
          <img
            className="rounded-t-lg"
            src={thumbnails?.medium?.url}
            alt="video-thumbnail"
          />
        </div>
        <div className="px-2 pt-1">
          <div>
            <h2
              title={title}
              className="font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis"
            >
              {title}
            </h2>
            <p className="text-gray-700">{channelTitle}</p>
            <span className="text-gray-700">{viewCount} views</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
