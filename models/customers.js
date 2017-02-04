module.exports = function(sequelize, DataTypes) {
    var Customers = sequelize.define('customers', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
                notEmpty: true
            }
        },
        school_city: {
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
    });

    return Customers;
};
