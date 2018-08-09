'use strict'

const models = require('./index')
const Tasks = models.Task

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(200),
        defaultValue: '',
        validate: {
          len: [0, 200],
          isAlphanumeric: true
        }
      },
      username: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
        validate: {
          len: [1, 20],
          isAlphanumeric: true,
          isLowercase: true,
          notEmpty: true
        }
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
          len: [1, 100],
          isEmail: true,
          isLowercase: true,
          notEmpty: true
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    },
    {}
  )
  User.associate = function(models) {
    // associations can be defined here
  }
  return User
}
