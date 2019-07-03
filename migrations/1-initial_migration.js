'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "products", deps: []
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2019-07-03T13:45:31.150Z",
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
    },
    {
        fn: "createTable",
        params: [
            "users",
            {
                "UserId": {
                    "type": Sequelize.INTEGER(11),
                    "field": "UserId",
                    "primaryKey": true,
                    "allowNull": false
                },
                "FirstName": {
                    "type": Sequelize.STRING(45),
                    "field": "FirstName",
                    "allowNull": false
                },
                "LastName": {
                    "type": Sequelize.STRING(45),
                    "field": "LastName",
                    "allowNull": false
                },
                "Username": {
                    "type": Sequelize.STRING(45),
                    "field": "Username",
                    "unique": true,
                    "allowNull": false
                },
                "UserImage": {
                    "type": Sequelize.STRING(255),
                    "field": "UserImage",
                    "allowNull": true
                },
                "Email": {
                    "type": Sequelize.STRING(45),
                    "field": "Email",
                    "allowNull": false
                },
                "Password": {
                    "type": Sequelize.STRING(45),
                    "field": "Password",
                    "allowNull": false
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
    }
];

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
