import { useEffect, useState } from "react";
import { GET_VIDEO_COMMENTS } from "../utils/constants";

export const VideoComments = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const fetchVideoComments = async () => {
    const apiData = await fetch(GET_VIDEO_COMMENTS + videoId);
    const json = await apiData.json();
    setComments(json?.items);
  };
  useEffect(() => {
    fetchVideoComments();
  }, []);

  const Comment = ({ comment }) => {
    return (
      <div className="flex m-1 p-2 items-start">
        <img
          className="rounded-full h-8 mx-2"
          alt="user-profile-img"
          src={
            comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
          }
        />
        <div>
          <p className="text-xs font-semibold">
            {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          </p>
          <p>{comment?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
          {comment?.snippet?.topLevelComment?.snippet?.likeCount ? (
            <p>👍 {comment?.snippet?.topLevelComment?.snippet?.likeCount}</p>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <div className="w-1/2 my-4">
      <h2 className="font-bold">Comments:</h2>
      {comments?.map((comment) => (
        <Comment
          key={comment?.snippet?.topLevelComment?.id}
          comment={comment}
        />
      ))}
    </div>
  );
};
