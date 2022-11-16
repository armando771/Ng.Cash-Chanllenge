'use strict'

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('Accounts',
    [
      {
        balance: 100
      },
      {
        balance: 100
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Accounts', null, {})
}
