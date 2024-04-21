import React from "react";

function VideoTitel({ title, overview }) {
  return (
    <div className=" pt-36 px-12">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-lg w-1/4 pt-2">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-6 text-xl opacity-50 rounded-lg">
          ▶️Play
        </button>
        <button className="mx-2 bg-white text-black p-4 px-6 text-xl opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitel;
