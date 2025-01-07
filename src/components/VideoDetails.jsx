import React from "react";
import { useParams } from "react-router-dom";
import { useGetVideoDetailsQuery } from "../service/api";
import ReactPlayer from "react-player";
import SuggestedVideos from "./SuggestedVideos";

const VideoDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetVideoDetailsQuery(id);

  if (error) return <div className="text-red-500 text-center py-5">Xatolik yuz berdi. Qayta urinib ko‘ring.</div>;
  if (isLoading) return <div className="text-center py-5">Yuklanmoqda...</div>;

  return (
    <div className="container mx-auto px-5 py-10">

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <div className="w-full rounded-lg overflow-hidden aspect-video shadow-md">
            <ReactPlayer
              controls
              height={"100%"}
              width={"100%"}
              url={`https://www.youtube.com/watch?v=${data?.id}`}
            />
          </div>
          <div className="mt-5">
            <h1 className="text-2xl font-semibold text-gray-900">{data?.title || "Video nomi mavjud emas"}</h1>
            <div className="flex items-center gap-5 mt-3">
              <span className="text-gray-600 text-sm">
                Ko‘rishlar: {data?.views || 0} 
              </span>
              <span className="text-gray-600 text-sm">
                Yuklangan: {new Date(data?.uploadDate).toLocaleDateString() || "Ma'lumot yo‘q"}
              </span>
            </div>
            <p className="mt-3 text-gray-700 text-sm">{data?.description || "Tavsif mavjud emas."}</p>
          </div>
        </div>


        <div className="w-full lg:w-[30%]">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Taklif etilgan videolar</h2>
          <SuggestedVideos />
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
