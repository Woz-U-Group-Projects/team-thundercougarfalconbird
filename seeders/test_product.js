'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products',[{
      productName : 'Sample-Product',
      style : 'Sample-Style',
      price : 5,
      description : 'This is a sample description',
      inventory : 2,
      last_update : new Date()
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
    queryInterface.bulkDelete('products', [{
      productName :'Sample-Product'
    }])
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
