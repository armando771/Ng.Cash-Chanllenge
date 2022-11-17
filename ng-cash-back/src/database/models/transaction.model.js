module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    value: DataTypes.INTEGER,
    debitedAccountId: { type: DataTypes.INTEGER, foreignKey: true },
    creditedAccountId: { type: DataTypes.INTEGER, foreignKey: true }
  }, { timestamps: false, underscored: true, tableName: 'Transactions' })

  Transaction.associate = (models) => {
    Transaction.belongsTo(models.Account, { foreignKey: 'accountId', as: 'accountsCred' })
    Transaction.belongsTo(models.Account, { foreignKey: 'accountId', as: 'accountsDeb' })
  }

  return Transaction
}
