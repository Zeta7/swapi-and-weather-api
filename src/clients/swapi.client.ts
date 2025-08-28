import axios from "axios";
import https from "https";

const SWAPI_BASE = "https://swapi.py4e.com/api";

const agent = new https.Agent({
  rejectUnauthorized: false,
});

export const getPeoplePage = async (page = 1) => {
  const res = await axios.get(`${SWAPI_BASE}/people/?page=${page}`, { httpsAgent: agent });
  return res.data;
};

export const getPlanetByUrl = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};
