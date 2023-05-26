import React from "react";

const TredingGames = ({ gameList }) => {
  return (
    <div className="hidden md:block mt-5">
      <h1 className="font-bold text-[30px] dark:text-white">Treding Games</h1>
      <div className="mt-5 hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gameList.map(
          (item, idx) =>
            idx < 4 && (
              <div
                key={idx}
                className="
                bg-[#76a8f75e] 
                rounded-lg 
                group 
                hover:scale-110 
                transition-all 
                duration-300 
                ease-in-out
                cursor-pointer"
              >
                <img
                  className="h-[270px] rounded-t-lg object-cover"
                  src={item?.background_image}
                />
                <h2 className="text-[20px] font-bold dark:text-white p-2 ">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TredingGames;
