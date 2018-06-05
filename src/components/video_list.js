import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = props => {
  const videoItems = props.videos && props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
      // <div>{video.id}</div>
    );
  });

  return (
    <ul className="col-4 list-group bg-warning">
      {videoItems}
    </ul>
  );
};

export default VideoList;