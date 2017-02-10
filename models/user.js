var passportLocalSequelize = require('passport-local-sequelize');

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING
        },
        hash: {
            type: DataTypes.TEXT
        },
        salt: {
            type: DataTypes.STRING
        }
    }, {
        // Method to allow volunteers to have many listins
        classMethods: {
            associate: function(models) {
                // Associating Volunteer with Listing
                models.User.hasOne(models.Volunteer, {
                    onDelete: "cascade"
                });
            }
        }

    });

    passportLocalSequelize.attachToUser(User, {
        usernameField: 'username',
        hashField: 'hash',
        saltField: 'salt'
    });

    return User;
};