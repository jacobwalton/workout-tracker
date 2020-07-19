// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

module.exports = function (app) {
  app.get("/", function (_, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  app.get("/exercise", function (_, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", function (_, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
