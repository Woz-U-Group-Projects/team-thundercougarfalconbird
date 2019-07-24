'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users',[{
      firstName : 'John',
      lastName : 'Doe',
      email : 'johnDoe@test.com',
      username : 'johndoe',
      password : 'Password',
      userImage : 'img.png',
      admin : true,
      createdAt : new Date(),
      updatedAt : new Date()      
    }], 
     {});
     
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('users', [{
      firstName :'John'
    }])
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
