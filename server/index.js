const express = require("express");
const cors = require('cors')
const path = require("path");
const getRoutes = require("./routes");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
const corsOptions = {
  origin: '*',
  optionSuccessStatus: 200
}
app.use(cors(corsOptions))

// Serve the built version of our React app
app.use(express.static(path.resolve(__dirname, "../react-client/public")));

app.use("/api", getRoutes());

// All routes that don't match api will be caught by this route (routed through our React app)
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../react-client/public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
