module.exports = function(sequelize, DataTypes) {
    var Volunteer = sequelize.define('Volunteer', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        volunteer_first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
                notEmpty: true
            }
        },
        volunteer_last_name: {
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
                notEmpty: true
            }
        },
        bio: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                len: [1, 500]
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
    }, {
        // Method to allow volunteers to have many listins
        classMethods: {
            associate: function(models) {
                // Associating Volunteer with Listing
                Volunteer.hasMany(models.Listing, {
                    onDelete: "cascade"
                });
            }
        }

    });

    return Volunteer;
};