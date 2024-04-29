// Load environment variables from .env file
require("dotenv").config();

// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
require("./database/client").checkConnection();

// Import the Express application from app/config.js
const app = require("./app/config");

// Get the port from the environment variables
const port = process.env.APP_PORT;

const paintingObjects = require("./painting.json");

app.get("/search/:query", (req, res) => {
  const { query } = req.params;

  const wantedQ = paintingObjects.filter((p) =>
    Object.values(p).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(query.toLowerCase())
    )
  );
  if (wantedQ.length > 0) {
    res.json(wantedQ);
  } else {
    res.sendStatus(404).json({
      message: "Painting not found",
    });
  }
});

app.get("/painting", (req, res) => {
  res.json(paintingObjects);
});

app.get("/painting/:id", (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id, 10);

  const picture = paintingObjects.find((p) => p.objectID === parsedId);

  if (picture) {
    res.json(picture);
  } else {
    res.sendStatus(404).json({
      message: "Painting not found",
    });
  }
});

app.get("/country/:nationality", (req, res) => {
  const { nationality } = req.params;

  const wantedCountry = paintingObjects.filter(
    (p) => p.artistNationality === nationality
  );

  if (wantedCountry) {
    res.json(wantedCountry);
  } else {
    res.sendStatus(404).json({
      message: "Painting not found",
    });
  }
});

app.get("/year/:year", (req, res) => {
  const { year } = req.params;

  const wantedYear = paintingObjects.filter((p) => p.objectDate === year);

  if (wantedYear) {
    res.json(wantedYear);
  } else {
    res.sendStatus(404).json({
      message: "Painting not found",
    });
  }
});

app.get("/artist/:artist", (req, res) => {
  const { artist } = req.params;

  const wantedArtist = paintingObjects.filter((p) =>
    p.artistDisplayName.includes(artist)
  );

  if (wantedArtist) {
    res.json(wantedArtist);
  } else {
    res.sendStatus(404).json({
      message: "Painting not found",
    });
  }
});

// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
