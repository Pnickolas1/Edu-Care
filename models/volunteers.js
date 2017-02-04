module.exports = function(sequelize, DataTypes) {
    var Volunteers = sequelize.define('volunteers', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        volunteer_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
                notEmpty: true
            }
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        preferred_city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        occupation: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });

    return Volunteers;
};
