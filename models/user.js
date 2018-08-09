'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      username: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {}
  )
  User.associate = function(models) {
    // associations can be defined here
  }
  return User
}
