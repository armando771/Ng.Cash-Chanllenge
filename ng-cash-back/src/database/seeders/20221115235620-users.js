'use strict'

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        username: 'Armando',
        password: '1234123',
        accountId: 1
      },
      {
        username: 'kaka',
        password: '13213321',
        accountId: 2
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {})
}
