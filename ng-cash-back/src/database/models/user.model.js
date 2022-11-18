const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    accountId: { type: DataTypes.INTEGER, foreignKey: true }
  }, { timestamps: false, tableName: 'Users' })

  User.associate = (models) => {
    User.belongsTo(models.Account, { foreignKey: 'accountId' })
  }

  return User
}

module.exports = UserModel
