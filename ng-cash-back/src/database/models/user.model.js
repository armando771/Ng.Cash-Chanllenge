const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.INTEGER,
    account_id: { type: DataTypes.INTEGER, foreignKey: true }
  }, { timestamps: false, underscored: true, tableName: 'Users' })

  User.associate = (models) => {
    User.belongsTo(models.Account, { foreignKey: 'account_id', as: 'accounts' })
  }

  return User
}

module.exports = UserModel
