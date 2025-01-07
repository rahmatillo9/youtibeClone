import { Verified } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {

  function formatNumber(number) {
    if (!number) return "0";
    if (number >= 1_000_000_000) return `${(number / 1_000_000_000).toFixed(1)} milliard`;
    if (number >= 1_000_000) return `${(number / 1_000_000).toFixed(1)} million`;
    if (number >= 1_000) return `${(number / 1_000).toFixed(1)} k`;
    return number.toString();
  }


  const formatDate = (date) => {
    const d = new Date(date);
    const now = new Date();
    const seconds = (now - d) / 1000;
    const days = Math.floor(seconds / 60 / 60 / 24);
    if (days < 1) return "Bugun";
    if (days < 7) return `${days} kun avval`;
    if (days < 30) return `${Math.floor(days / 7)} hafta avval`;
    if (days < 365) return `${Math.floor(days / 30)} oy avval`;
    return `${Math.floor(days / 365)} yil avval`;
  };

  return (
    <Link to={`/video/${video?.videoId}`} className="block hover:scale-105 transition-transform duration-300">

      <div className="relative w-full rounded-lg overflow-hidden shadow-md">
        <img
          src={video?.thumbnail?.[2]?.url || "https://picsum.photos/300"}
          alt={video?.title || "Video image"}
          className="w-full h-[200px] object-cover"
        />
 
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {video?.duration || "00:00"}
        </div>
      </div>

    
      <div className="flex mt-3 gap-3">

        <img
          src={video?.channelThumbnail?.[0]?.url || "https://picsum.photos/40"}
          alt={video?.channelTitle || "Channel"}
          className="w-10 h-10 rounded-full object-cover shadow"
        />


        <div className="flex-1">
          <h3 className="font-medium text-lg line-clamp-2 text-gray-900">{video?.title || "Video nomi"}</h3>
          <p className="text-sm flex items-center gap-1 text-gray-500 mt-1">
            <Verified fontSize="small" className="text-blue-500" />
            {video?.channelTitle || "Kanal nomi"}
          </p>
          <div className="text-sm text-gray-500 flex items-center gap-2 mt-1">
            <span>{formatNumber(video?.viewCount)}</span>
            <span className="inline-block w-1 h-1 bg-gray-500 rounded-full"></span>
            <span>{formatDate(video?.publishDate)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
