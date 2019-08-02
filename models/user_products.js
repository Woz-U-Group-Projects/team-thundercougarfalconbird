/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_products', {
    userId: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'userId'
      }
    },
    productId: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'products',
        key: 'productsId'
      }
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'user_products'
  });
};
