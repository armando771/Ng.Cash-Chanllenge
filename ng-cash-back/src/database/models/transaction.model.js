module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    value: DataTypes.INTEGER,
    debited_account_id: { type: DataTypes.INTEGER, foreignKey: true },
    credited_account_id: { type: DataTypes.INTEGER, foreignKey: true }
  }, { tableName: 'Transactions', updatedAt: false, underscored: true })

  Transaction.associate = (models) => {
    Transaction.belongsTo(models.Account, { foreignKey: 'debited_account_id', as: 'accountsDeb' })
    Transaction.belongsTo(models.Account, { foreignKey: 'credited_account_id', as: 'accountsCred' })
  }

  return Transaction
}
