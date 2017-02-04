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
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        // Method to allow volunteer to have many listings
        classMethods: {
            associate: function(models) {
                // Associating Volunteer with Listing
                Listing.belongsTo(models.Volunteer, {
                    onDelete: "cascade",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return Listing;
};
