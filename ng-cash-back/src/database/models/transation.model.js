module.exports = (sequelize, DataTypes) => {
  const Transations = sequelize.define('Transations', {
    value: DataTypes.INTEGER
  }, { timestamps: false, underscored: true, freezeTableName: true })

  // Transations.associate = (models) => {
  //   Transations.belongsToMany(models.Account, { foreignKey: 'accountId', as: 'accounts' })
  //   Transations.belongsToMany(models.Account, { foreignKey: 'accountId', as: 'accounts' })
  // }

  return Transations
}
