import axios from "axios";

const BASE_URL = "https://api.rawg.io/api";
const API_KEY = "507b8d956272471a8c1b027cb43aad17"; // tanpa .env

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// wrapper GET
export async function rawgGet(path, params = {}) {
  const merged = { key: API_KEY, ...params };
  const res = await api.get(path, { params: merged });
  return res.data;
}

// fetch list games
export async function fetchGames({ page = 1, page_size = 20, search = "" } = {}) {
  return rawgGet("/games", { page, page_size, search });
}

// fetch detail
export async function fetchGameDetail(id) {
  return rawgGet(`/games/${id}`);
}
