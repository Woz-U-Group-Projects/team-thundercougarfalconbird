/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_products', {
        userId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        productId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
            tableName: 'user_products'
        });
};
