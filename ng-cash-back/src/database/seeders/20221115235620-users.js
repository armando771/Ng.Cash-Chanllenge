'use strict'

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        username: 'Armando',
        password: '1234123',
        account_id: 1
      },
      {
        username: 'kaka',
        password: '13213321',
        account_id: 2
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {})
}
