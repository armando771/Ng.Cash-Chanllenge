module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    balance: DataTypes.INTEGER
  }, { timestamps: false, underscored: true, freezeTableName: true, tableName: 'Accounts' })

  Account.associate = (models) => {
    models.Account.hasOne(models.User, { foreignKey: 'accountId', as: 'accounts' })
    // models.Account.hasMany(models.Transations, { foreignKey: 'debitedAccountId', as: 'debitedAccount' })
    // models.Account.hasMany(models.Transations, { foreignKey: 'creditedAccountId', as: 'creditedAccount' })
  }

  return Account
}
