module.exports = function(sequelize, DataTypes) {
    var Listing = sequelize.define('Listing', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        specialty: {
            type: DataTypes.STRING,
            validate: {
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
        createdAt: {
            type: DataTypes.DATE
          //  defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE
          ///  defaultValue: sequelize.literal('NOW()')
        }
    }, {
        // Method to allow volunteer to have many listings
        classMethods: {
            associate: function(models) {
                // Associating Volunteer with Listing
                models.Listing.belongsTo(models.Volunteer);
            }
        }
    });

    return Listing;
};
