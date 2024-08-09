const router = require('express').Router();
const exerciseRoutes = require('./exerciseRoutes');
const workoutRoutes = require('./workoutRoutes');
const userRoutes = require('./userRoutes');

router.use('/exercises', exerciseRoutes);
router.use('/workouts', workoutRoutes);
router.use('/users', userRoutes);

module.exports = router;
