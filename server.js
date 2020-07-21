const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", {
  useNewUrlParser: true,
  useFindAndModify: false,
});
mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// routes
require("./routes/workoutRoutes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, () => {
  console.log(`Running on port http://localhost:${PORT}`);
});
