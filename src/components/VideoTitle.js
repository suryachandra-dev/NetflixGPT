import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video  pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="flex">
  <button className="bg-white text-xl p-4 px-12  rounded-lg flex items-center text-black hover:bg-opacity-80">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <polygon points="5 3 19 12 5 21" fill="black"></polygon>
</svg>

    <span className="ml-2">Play</span>
  </button>

  <button className="mx-2 bg-gray-500 text-xl p-4 px-16 bg-opacity-70 rounded-lg">
    More Info!
  </button>
</div>

    </div>
  );
};

export default VideoTitle;
