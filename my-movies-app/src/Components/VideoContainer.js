import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import axios from "axios";
import { YOUTUBE_API } from "./utility/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    try {
      let data = await axios(YOUTUBE_API);
      setVideos(data.data.items);
    } catch (e) {
      throw new Error(e);
    }
  };
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos.map((val) => (
      <Link to={"/watch?v="+val.id}  key={`card-${val.id}`} ><VideoCard info={val} /></Link> 
      ))}
    </div>
  );
};

export default VideoContainer;
