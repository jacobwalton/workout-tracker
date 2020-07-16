const Workout = require("../models/workout.js");
const router = require("express").Router();

app.route("/").post(function (req, res) {
  Workout.insertMany(data, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
/////
router.route("/").get((req, res) => {
  Workout.find()
    .then((exercises = res.join(exercises)))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/api/workout").post((req, res) => {
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

///////
router.post("/api/Workout/", ({ body }, res) => {
  Workout.insertMany(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/Workout", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
