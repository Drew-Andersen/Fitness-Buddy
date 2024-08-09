const router = require('express').Router();
const { Workout, Exercise } = require('../../models');

// GET all workouts
router.get('/', async (req, res) => {
  try {
    const workouts = await Workout.findAll({
      include: [{ model: Exercise }],
    });
    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single workout by id
router.get('/:id', async (req, res) => {
  try {
    const workout = await Workout.findByPk(req.params.id, {
      include: [{ model: Exercise }],
    });

    if (!workout) {
      res.status(404).json({ message: 'No workout found with this id!' });
      return;
    }

    res.status(200).json(workout);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new workout
router.post('/', async (req, res) => {
  try {
    const newWorkout = await Workout.create(req.body);
    res.status(201).json(newWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT update a workout by id
router.put('/:id', async (req, res) => {
  try {
    const updatedWorkout = await Workout.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatedWorkout[0]) {
      res.status(404).json({ message: 'No workout found with this id!' });
      return;
    }

    res.status(200).json(updatedWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a workout by id
router.delete('/:id', async (req, res) => {
  try {
    const deletedWorkout = await Workout.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedWorkout) {
      res.status(404).json({ message: 'No workout found with this id!' });
      return;
    }

    res.status(200).json(deletedWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
