/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    productId: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    productName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    style: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    inventory: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'products'
  });
};
