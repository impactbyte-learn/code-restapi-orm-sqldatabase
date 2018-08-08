'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    const demoUsers = [{
      username: 'mhaidarh',
      email: 'haidar@impactbyte.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'abbayosua',
      email: 'email@abbayosua.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'fabilqis',
      email: 'fadillah.bilqis@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'gunturkh',
      email: 'guntur.kh@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'indrolie',
      email: 'indrolie@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]

    return queryInterface.bulkInsert('Users', demoUsers, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkDelete('Users', null, {});
  }
};