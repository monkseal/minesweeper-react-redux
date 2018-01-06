const LEVELS = {
  BEGINNER: {
    name: "Beginner",
    boardSize: 9,
    mines: 10
  },
  INTERMEDIATE: {
    name: "Intermediate",
    boardSize: 16,
    mines: 40
  },
  EXPERT: {
    name: "Expert",
    boardSize: 24,
    mines: 99
  }
};


const Levels = () => JSON.parse(JSON.stringify(LEVELS));

const randomLocations = ({ boardSize, mines }) => {
  const locations = [];

  while (locations.length < mines) {
    const x = Math.floor(Math.random() * boardSize);
    const y = Math.floor(Math.random() * boardSize);
    const coordinate = `${x},${y}`;
    if (!locations.includes(coordinate)) {
      locations.push(coordinate);
    }
  }
  return locations;
};

const mineLocationsFor = (level) => randomLocations(LEVELS[level]);

export { Levels as default, mineLocationsFor };
