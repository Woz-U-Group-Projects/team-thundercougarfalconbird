/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    ProductId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    ProductName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Department: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Style: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ProductImage: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Rating: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'products'
  });
};
