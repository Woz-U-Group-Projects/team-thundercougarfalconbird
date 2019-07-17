'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "products", deps: []
 *
 **/

var info = {
    "revision": 2,
    "name": "add-products",
    "created": "2019-07-17T18:08:54.098Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "products",
        {
            "ProductId": {
                "type": Sequelize.INTEGER(11),
                "field": "ProductId",
                "primaryKey": true,
                "allowNull": false
            },
            "ProductName": {
                "type": Sequelize.STRING(45),
                "field": "ProductName",
                "allowNull": false
            },
            "Department": {
                "type": Sequelize.STRING(45),
                "field": "Department",
                "allowNull": true
            },
            "Style": {
                "type": Sequelize.STRING(45),
                "field": "Style",
                "allowNull": true
            },
            "Price": {
                "type": Sequelize.DECIMAL,
                "field": "Price",
                "allowNull": false
            },
            "Description": {
                "type": Sequelize.STRING(255),
                "field": "Description",
                "allowNull": true
            },
            "ProductImage": {
                "type": Sequelize.STRING(255),
                "field": "ProductImage",
                "allowNull": true
            },
            "Rating": {
                "type": Sequelize.DECIMAL,
                "field": "Rating",
                "allowNull": true
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
