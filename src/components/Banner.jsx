import React from "react";

const Banner = ({ gameBanner }) => {
  return (
    <div className="relative">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full rounded-xl">
        <h2 className="text-white text-[24px] font-bold">{gameBanner?.name}</h2>
        <button className="bg-blue-700 text-white p-1 px-2 rounded-lg">
          Get Now
        </button>
      </div>
      <img
        className="md:h-[320px] w-full object-cover rounded-lg "
        src={gameBanner?.background_image}
      />
    </div>
  );
};

export default Banner;
