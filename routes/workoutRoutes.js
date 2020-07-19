const Workout = require("../models/workout.js");
const router = require("express").Router();

router.get("/api/stats", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/api/workout", (req, res) => {
  Workout.find()
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/api/workout", (req, res) => {
  const type = req.body.type;
  const name = req.body.name;
  const distance = Number(req.body.distance);
  const weight = Number(req.body.weight);
  const sets = Number(req.body.sets);
  const reps = Number(req.body.reps);
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newWorkout = new Workout({
    type,
    name,
    distance,
    weight,
    sets,
    reps,
    duration,
    date,
  });

  newWorkout
    .save()
    .then(() => res.json("Workout added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
