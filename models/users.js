/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    UserId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    FirstName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Username: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    UserImage: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'users'
  });
};
