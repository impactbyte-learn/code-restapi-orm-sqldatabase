'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    const demoUsers = [{
      username: 'haidar',
      email: 'haidar@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'abbayosua',
      email: 'abba@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'fabilqis',
      email: 'fadillah.bilqis@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'gunturkh',
      email: 'guntur.kh@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'indrolie',
      email: 'indrolie@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'mayasopiee',
      email: 'mayasopiee@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'alifraher',
      email: 'alifraher@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'ariebrainware',
      email: 'ariebrainware@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'wondoindra',
      email: 'wondoindra@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'michaeltamsil',
      email: 'michaeltamsil@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'amirul-inc',
      email: 'amirul@example.com',
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
