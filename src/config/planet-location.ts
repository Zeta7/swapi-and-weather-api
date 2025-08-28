export interface Location {
  latitude: number;
  longitude: number;
}

export const planetToLocation: Record<string, Location> = {
  "Tatooine": { latitude: -12.0464, longitude: -77.0428 }, // Lima, Perú
  "Alderaan": { latitude: 4.7110, longitude: -74.0721 },   // Bogotá, Colombia
  "Yavin IV": { latitude: -33.4489, longitude: -70.6693 }, // Santiago, Chile
  "Hoth": { latitude: -16.4090, longitude: -71.5375 },     // Arequipa, Perú
  "Dagobah": { latitude: -12.0432, longitude: -75.2391 },  // Huancayo, Perú
  "Bespin": { latitude: 6.2442, longitude: -75.5812 },     // Medellín, Colombia
  "Endor": { latitude: -12.0621, longitude: -77.0375 },    // Callao, Perú
  "Naboo": { latitude: -8.1159, longitude: -79.0290 },     // Trujillo, Perú
  "Coruscant": { latitude: -12.0665, longitude: -75.2120 }, // Jauja, Perú
  "Kamino": { latitude: 3.4516, longitude: -76.5320 },     // Cali, Colombia
  "Geonosis": { latitude: -18.0066, longitude: -70.2463 }, // Tacna, Perú
  "Utapau": { latitude: 10.3910, longitude: -75.4794 },    // Cartagena, Colombia
  "Mustafar": { latitude: -13.1588, longitude: -74.2239 }, // Ayacucho, Perú
  "Kashyyyk": { latitude: -33.0464, longitude: -71.6169 }, // Valparaíso, Chile
  "Polis Massa": { latitude: -9.9306, longitude: -76.2422 }, // Huánuco, Perú
  "Mygeeto": { latitude: 7.1193, longitude: -73.1227 },    // Bucaramanga, Colombia
  "Felucia": { latitude: -6.7714, longitude: -79.8409 },   // Chiclayo, Perú
  "Cato Neimoidia": { latitude: -29.9027, longitude: -71.2519 }, // La Serena, Chile
  "Saleucami": { latitude: -9.3050, longitude: -77.6435 }, // Huaraz, Perú
  "Stewjon": { latitude: 10.9685, longitude: -74.7813 },   // Barranquilla, Colombia
  "Eriadu": { latitude: -17.9892, longitude: -67.1284 },   // Oruro, Bolivia
  "Corellia": { latitude: -34.6118, longitude: -58.4173 }, // Buenos Aires, Argentina
  "Rodia": { latitude: -0.2295, longitude: -78.5243 },     // Quito, Ecuador
  "Nal Hutta": { latitude: -33.4691, longitude: -70.6420 }, // Santiago Centro, Chile
  "Dantooine": { latitude: -22.9068, longitude: -43.1729 }, // Río de Janeiro, Brasil
  "Bestine IV": { latitude: 19.4326, longitude: -99.1332 }, // Ciudad de México
  "Ord Mantell": { latitude: 25.7617, longitude: -80.1918 }, // Miami, USA
  "Malastare": { latitude: 14.6349, longitude: -90.5069 },  // Ciudad de Guatemala
  "Trandosha": { latitude: 13.6929, longitude: -89.2182 },  // San Salvador, El Salvador
  "Socorro": { latitude: 9.9281, longitude: -84.0907 },    // San José, Costa Rica
  "Mon Cala": { latitude: -12.0464, longitude: -77.0428 }, // Lima, Perú (repite)
  "Chandrila": { latitude: -16.5000, longitude: -68.1500 }, // La Paz, Bolivia
  "Sullust": { latitude: -12.0621, longitude: -75.2100 },  // Huancayo, Perú
  "Toydaria": { latitude: -33.0472, longitude: -71.6127 }, // Valparaíso, Chile
  "Malachor": { latitude: 20.6597, longitude: -103.3496 }, // Guadalajara, México
  "Dathomir": { latitude: -34.6037, longitude: -58.3816 }, // Buenos Aires, Argentina
  "Ryloth": { latitude: -12.0720, longitude: -77.0760 },   // Ventanilla, Perú
  "Ilum": { latitude: 40.7128, longitude: -74.0060 },      // Nueva York, USA
  "Jedha": { latitude: 30.0444, longitude: 31.2357 },      // El Cairo, Egipto
  "Scarif": { latitude: -8.7832, longitude: -55.4915 },    // Brasil (Amazonas)
  "Ahch-To": { latitude: 53.1424, longitude: -7.6921 },    // Irlanda
  "Crait": { latitude: 46.6034, longitude: 1.8883 },       // Francia
  "Exegol": { latitude: 28.6139, longitude: 77.2090 },     // Nueva Delhi, India
};
