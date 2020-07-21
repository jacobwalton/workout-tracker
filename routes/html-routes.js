var path = require("path");

module.exports = function (app) {
  app.get("/", function (_, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/exercise", function (_, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", function (_, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
