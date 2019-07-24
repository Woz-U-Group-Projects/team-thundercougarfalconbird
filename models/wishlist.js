/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('wishlist', {
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
            tableName: 'wishlist'
        });
};
