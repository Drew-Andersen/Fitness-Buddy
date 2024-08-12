// Imports
const sequelize = require('../config/connection');
const { User, Workout, Exercise, MuscleGroup } = require('../models');

// Import the json files
const userData = require('./userData.json');
const exerciseData = require('./exerciseData.json');
const workoutData = require('./workoutData.json');
const muscleGroupData = require('./muscleGroupData.json');

const seedDatabase = async () => {
    // sequelize.sync({ force: true });

    // To seed User
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    });

    // To seed the muscle groups
    await MuscleGroup.bulkCreate(muscleGroupData, {
        individualHooks: true,
        returning: true
    });

    //To seed the exercises
    for (const exercise of exerciseData) {
        await Exercise.create({
            ...exercise,
            user_id: users[Math.floor(Math.random() * users.length)].id
        })
    }

    // Add workout seed here


    process.exit(0);
}

seedDatabase();