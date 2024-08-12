const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MuscleGroup extends Model{}

MuscleGroup.init(
    {
        muscle_group_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        href_icon: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'muscle_group'
    }
)

module.exports = MuscleGroup;