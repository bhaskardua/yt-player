import React from "react";
import YouTube from "react-youtube";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.snippet.resourceId.videoId;
  // const url = `https://www.youtube.com/embed/${videoId}`;
  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  return (
    <div className="video-detail col-8 bg-primary">
      <div className="embed-responsive embed-responsive-16by9">
        <YouTube
          videoId={videoId}
          opts={opts}
        />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;

// <iframe className="embed-responsive-item" src={url} frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>