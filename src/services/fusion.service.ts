// src/services/fusionService.ts
import { getPeoplePage, getPlanetByUrl } from "../clients/swapi.client";
import { getCurrentWeatherByLocation } from "../clients/weather.client";
import { planetToLocation } from "../config/planet-location";
import { v4 as uuidv4 } from "uuid";
import { getCache, putCache } from "../repositories/cache.repository";
import { putHistory } from "../repositories/history.repository";

const CACHE_TTL_SECONDS = 30 * 60;

export const getFusion = async (page = 1) => {
  const cacheKey = `fusion:peoplePage:${page}`;
  const now = Math.floor(Date.now() / 1000);

  try {
    // Buscar en caché
    const cached = await getCache(cacheKey);

    if (cached && cached.expiresAt > now) {
      return { fromCache: true, payload: cached.data };
    }

    // Personas
    const peoplePage = await getPeoplePage(page);

    if (!peoplePage?.results?.length) {
      throw new Error("No se encontraron personajes en SWAPI");
    }

    const merged: any[] = [];

    for (const person of peoplePage.results) {
      try {
        // Obtener planeta
        const planetUrl = person.homeworld;
        const planet = await getPlanetByUrl(planetUrl);

        // Mapear planeta a lat/lon
        const location = planetToLocation[planet.name];
        if (!location) {
          console.warn(`No se encontró ubicación para el planeta: ${planet.name}`);
          continue;
        }

        // Obtener clima desde Open-Meteo
        const weather = await getCurrentWeatherByLocation(location);

        merged.push({
          person: {
            name: person.name,
            height: Number(person.height) || null,
            mass: person.mass !== "unknown" ? Number(person.mass) : null,
          },
          planet: {
            name: planet.name,
            climate: planet.climate,
            population:
              planet.population !== "unknown" ? Number(planet.population) : null,
          },
          weather: {
            latitude: location.latitude,
            longitude: location.longitude,
            temp_c: weather?.temperature ?? null,
            wind_kmh: weather?.windspeed ?? null,
            time: weather?.time ?? null,
          },
        });
      } catch (innerErr) {
        console.warn("Error fusionando datos de persona:", person.name, innerErr);
      }
    }

    const payload = { page, merged, swapiMeta: { count: peoplePage.count } };

    // Guardar en cache e histórico
    await putCache(cacheKey, payload, now + CACHE_TTL_SECONDS);
    await putHistory({ id: uuidv4(), createdAt: now, payload });

    return { fromCache: false, payload };
  } catch (err) {
    console.error("Error en getFusion:", err);
    throw err;
  }
};
