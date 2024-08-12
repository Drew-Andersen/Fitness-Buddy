const User = require('./User');
const Exercise = require('./Exercise');
const MuscleGroup = require('./MuscleGroup');
const Workout = require("./Workout");

User.hasMany(Workout, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Exercise.belongsTo(MuscleGroup, {
    foreignKey: 'muscle_group_id'
});

MuscleGroup.hasMany(Exercise, {
    foreignKey: 'muscle_group_id',
    onDelete: 'CASCADE'
});

// Workout.hasMany(Exercise, {
//     foreignKey: 'exercise_id'
// })

Workout.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Exercise, MuscleGroup, Workout };