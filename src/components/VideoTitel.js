import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

function VideoTitel({ title, overview }) {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg w-1/4 pt-2">{overview}</p>
      <div className=" flex py-4 ">
        <button className="bg-white text-black p-3 px-4 text-xl hover:opacity-80 rounded-lg flex justify-between">
          <FaPlay className="pr-2 text-3xl " />
          Play
        </button>
        <button className="mx-2 bg-white text-black p-3 px-4 text-xl hover:opacity-60 rounded-lg flex">
          <IoInformationCircleOutline className="mx-2 text-3xl" /> More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitel;
