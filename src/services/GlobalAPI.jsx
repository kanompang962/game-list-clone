import axios from "axios";

const apiKey = "71cc40bc1997415e848003b95e994d19";

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get(`/genres?key=${apiKey}`);

const getAllGames = axiosCreate.get(`/games?key=${apiKey}`);

const getGameListByGenreId = (id) =>
  axiosCreate.get(`/games?key=${apiKey}&genres=${id}`);

export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
};
