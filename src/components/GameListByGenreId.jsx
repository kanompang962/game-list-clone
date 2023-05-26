import React, { useEffect } from "react";

const GameListByGenreId = ({ gameListByGenres, nameGenreList }) => {
  return (
    <div>
      <h1 className="font-bold text-[30px] mt-5 dark:text-white">
        {nameGenreList} Games
      </h1>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gameListByGenres.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#76a8f75e] h-[312px] object-cover p-3 rounded-xl pb-12
            hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <img
              width={1080}
              className="w-full h-[80%] rounded-xl object-cover"
              src={item?.background_image}
            />
            <h1 className=" text-[20px] font-bold dark:text-white">
              {item?.name}
              <span
                className="
                text-[10px]
                p-1 ml-2 rounded-sm
                text-green-700
                bg-green-100
                font-medium"
              >
                {item?.metacritic}
              </span>
            </h1>
            <p className="text-gray-500 dark:text-gray-300">
              ⭐️{item?.rating} 💬{item?.reviews_count} 🔥
              {item?.suggestions_count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameListByGenreId;
