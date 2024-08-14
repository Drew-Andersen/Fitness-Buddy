const router = require('express').Router();
const exerciseRoutes = require('./exerciseRoutes');
const workoutRoutes = require('./workoutRoutes');
const userRoutes = require('./userRoutes');
const muscleGroupRoutes = require('./muscleGroupRoutes')

router.use('/muscle_group', muscleGroupRoutes)
router.use('/exercises', exerciseRoutes);
router.use('/workouts', workoutRoutes);
router.use('/users', userRoutes);

module.exports = router;
