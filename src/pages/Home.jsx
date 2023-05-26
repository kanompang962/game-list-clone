import React, { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import GlobalApi from "../services/GlobalAPI";
import Banner from "../components/Banner";
import TredingGames from "../components/TredingGames";
import GameListByGenreId from "../components/GameListByGenreId";

const Home = () => {
  const [allGameList, setAllGameList] = useState([]);
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [nameGenreList, setNameGenreList] = useState("Action");

  useEffect(() => {
    getAllGamesList();
    getGameListByGenresId(4);
  }, []);

  const getGameListByGenresId = (id) => {
    console.log("Genre: ", id);
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      // console.log(resp.data.results);
      setGameListByGenres(resp.data.results);
    });
  };

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      // console.log(resp.data.results);
      setAllGameList(resp.data.results);
    });
  };

  return (
    <div className="grid grid-cols-4 px-8">
      <div className="col-span-1 hidden md:block">
        <GenreList
          genreId={(genreId) => getGameListByGenresId(genreId)}
          nameGenreList={(name) => setNameGenreList(name)}
        />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGameList?.length > 0 && gameListByGenres.length > 0 ? (
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TredingGames gameList={allGameList} />
            <GameListByGenreId
              gameListByGenres={gameListByGenres}
              nameGenreList={nameGenreList}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
