module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    balance: DataTypes.INTEGER
  }, { timestamps: false, freezeTableName: true, tableName: 'Accounts' })

  Account.associate = (models) => {
    models.Account.hasOne(models.User, { foreignKey: 'accountId', as: 'users' })
    models.Account.hasMany(models.Transaction, { foreignKey: 'debitedAccountId', as: 'debitedAccount' })
    models.Account.hasMany(models.Transaction, { foreignKey: 'creditedAccountId', as: 'creditedAccount' })
  }

  return Account
}
