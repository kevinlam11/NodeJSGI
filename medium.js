const fs = require("fs");

const readPlanets = () => {
  try {
    const data = fs.readFileSync("planets.txt", "utf8");
    const planets = data.trim().split(", ");
    return planets;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const printPlanets = () => {
  const planets = readPlanets();
  planets.forEach((planet) => console.log(planet));
};

printPlanets();

// node medium.js in terminal
