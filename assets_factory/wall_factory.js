const makeWalls = () => {
  const topWall = {
    id: 'background-wall-top', x: 0, y: 0, height: 50, width: 2000,
  };
  const bottomWall = {
    id: 'background-wall-bottom', x: 0, y: 1975, height: 50, width: 2000,
  };
  const leftWall = {
    id: 'background-wall-left', x: 0, y: 0, height: 2000, width: 50,
  };
  const rightWall = {
    id: 'background-wall-right', x: 1975, y: 0, height: 2000, width: 50,
  };
  const vertical1 = {
    id: 'background-wall-v1', x: 475, y: 0, height: 525, width: 50,
  };
  const vertical2 = {
    id: 'background-wall-v2', x: 1175, y: 0, height: 525, width: 50,
  };
  const vertical3 = {
    id: 'background-wall-v3', x: 275, y: 475, height: 150, width: 50,
  };
  const vertical4 = {
    id: 'background-wall-v4', x: 1575, y: 475, height: 350, width: 50,
  };
  const vertical5 = {
    id: 'background-wall-v5', x: 275, y: 775, height: 350, width: 50,
  };
  const vertical6 = {
    id: 'background-wall-v6', x: 275, y: 1275, height: 250, width: 50,
  };
  const vertical7 = {
    id: 'background-wall-v7', x: 1575, y: 1075, height: 250, width: 50,
  };
  const vertical8 = {
    id: 'background-wall-v8', x: 575, y: 1475, height: 525, width: 50,
  };
  const vertical9 = {
    id: 'background-wall-v9', x: 1475, y: 1475, height: 525, width: 50,
  };
  const horizontal1 = {
    id: 'background-wall-h1', x: 0, y: 475, height: 50, width: 325,
  };
  const horizontal2 = {
    id: 'background-wall-h2', x: 475, y: 475, height: 50, width: 300,
  };
  const horizontal3 = {
    id: 'background-wall-h3', x: 925, y: 475, height: 50, width: 300,
  };
  const horizontal4 = {
    id: 'background-wall-h4', x: 1375, y: 475, height: 50, width: 625,
  };
  const horizontal5 = {
    id: 'background-wall-h5', x: 0, y: 1075, height: 50, width: 325,
  };
  const horizontal6 = {
    id: 'background-wall-h6', x: 1575, y: 1075, height: 50, width: 425,
  };
  const horizontal7 = {
    id: 'background-wall-h7', x: 0, y: 1475, height: 50, width: 325,
  };
  const horizontal8 = {
    id: 'background-wall-h8', x: 475, y: 1475, height: 75, width: 150,
  };
  const horizontal9 = {
    id: 'background-wall-h9', x: 875, y: 1475, height: 50, width: 650,
  };

  return [
    topWall, bottomWall, rightWall, leftWall,
    vertical1, vertical2, vertical3, vertical4,
    vertical5, vertical6, vertical7, vertical8,
    vertical9, horizontal1, horizontal2, horizontal3,
    horizontal4, horizontal5, horizontal6, horizontal7,
    horizontal8, horizontal9,
  ];
};

module.exports = makeWalls;
