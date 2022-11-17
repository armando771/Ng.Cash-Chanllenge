module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    value: DataTypes.INTEGER,
    debited_account_id: { type: DataTypes.INTEGER, foreignKey: true },
    credited_account_id: { type: DataTypes.INTEGER, foreignKey: true }
  }, { underscored: true, tableName: 'Transactions', updatedAt: false })

  Transaction.associate = (models) => {
    Transaction.belongsTo(models.Account, { foreignKey: 'debited_account_id', as: 'accountsCred' })
    Transaction.belongsTo(models.Account, { foreignKey: 'credited_account_id', as: 'accountsDeb' })
  }

  return Transaction
}
