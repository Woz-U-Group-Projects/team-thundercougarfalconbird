/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_products', {
        userId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            references:{
                model: 'users',
                key: 'userId'
            }
        },
        productId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'products',
                key: 'productId'
            }
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
