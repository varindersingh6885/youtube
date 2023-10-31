import { Link } from "react-router-dom";
export const VideoCard = ({ videoInfo }) => {
  const { snippet } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="border shadow-sm shadow-gray-300 border-gray-300 rounded-lg pb-4">
      <Link
        to={`watch?v=${
          videoInfo?.id?.videoId ? videoInfo?.id?.videoId : videoInfo?.id
        }`}
        className="cursor-pointer"
      >
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
          </div>
        </div>
      </Link>
    </div>
  );
};
