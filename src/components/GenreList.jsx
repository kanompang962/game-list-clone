import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalAPI";

const GenreList = ({ genreId, nameGenreList }) => {
  const [genreList, setGenreList] = useState([]);
  const [activeIdx, setActiveIdx] = useState(0);
  // const [genreListId, setGenreListId] = useState();

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      setGenreList(resp.data.results);
    });
  };

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">Genre</h2>
      {genreList.map((item, idx) => (
        <div
          onClick={() => {
            setActiveIdx(idx);
            genreId(item.id);
            nameGenreList(item.name);
            // console.log(genreListId);
          }}
          className={`
          flex gap-2
          group
          items-center
          mb-2 p-2 mr-4
          cursor-pointer
          rounded-lg
          hover:bg-gray-300 hover:dark:bg-gray-600
          ${activeIdx == idx ? "bg-gray-300 dark:bg-gray-600" : null}`}
          key={idx}
        >
          <img
            className={`
            object-cover 
            rounded-lg 
            w-[40px] h-[40px]
            group-hover:scale-105 transition-all ease-out duration-300
            ${activeIdx == idx ? "scale-105" : null}`}
            src={item.image_background}
          />
          <h3
            className={`
            group-hover:font-bold
            dark:text-white 
            text-[18px] 
            ${activeIdx == idx ? "font-bold" : null}`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default GenreList;
