'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "products", deps: []
 * createTable "users", deps: []
 * createTable "user_products", deps: [users, products]
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2019-08-02T04:31:38.965Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "products",
            {
                "productId": {
                    "type": Sequelize.INTEGER(5).UNSIGNED,
                    "field": "productId",
                    "primaryKey": true,
                    "allowNull": false
                },
                "productName": {
                    "type": Sequelize.STRING(45),
                    "field": "productName",
                    "allowNull": false
                },
                "style": {
                    "type": Sequelize.STRING(45),
                    "field": "style",
                    "allowNull": true
                },
                "price": {
                    "type": Sequelize.DECIMAL,
                    "field": "price",
                    "allowNull": true
                },
                "description": {
                    "type": Sequelize.STRING(225),
                    "field": "description",
                    "allowNull": true
                },
                "inventory": {
                    "type": Sequelize.INTEGER(11),
                    "field": "inventory",
                    "allowNull": true
                },
                "last_update": {
                    "type": Sequelize.DATE,
                    "field": "last_update",
                    "defaultValue": Sequelize.Literal,
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
                "userId": {
                    "type": Sequelize.INTEGER(5).UNSIGNED,
                    "field": "userId",
                    "primaryKey": true,
                    "allowNull": false
                },
                "firstName": {
                    "type": Sequelize.STRING(45),
                    "field": "firstName",
                    "allowNull": false
                },
                "lastName": {
                    "type": Sequelize.STRING(45),
                    "field": "lastName",
                    "allowNull": false
                },
                "email": {
                    "type": Sequelize.STRING(45),
                    "field": "email",
                    "unique": true,
                    "allowNull": false
                },
                "username": {
                    "type": Sequelize.STRING(45),
                    "field": "username",
                    "unique": true,
                    "allowNull": false
                },
                "password": {
                    "type": Sequelize.STRING(45),
                    "field": "password",
                    "allowNull": false
                },
                "last_update": {
                    "type": Sequelize.DATE,
                    "field": "last_update",
                    "defaultValue": Sequelize.Literal,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "user_products",
            {
                "userId": {
                    "type": Sequelize.INTEGER(5).UNSIGNED,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "unique": "user_products_productId_userId_unique",
                    "field": "userId",
                    "references": {
                        "model": "users",
                        "key": "userId"
                    },
                    "primaryKey": true,
                    "allowNull": false
                },
                "productId": {
                    "type": Sequelize.INTEGER(5).UNSIGNED,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "unique": "user_products_productId_userId_unique",
                    "field": "productId",
                    "references": {
                        "model": "products",
                        "key": "productId"
                    },
                    "primaryKey": true,
                    "allowNull": false
                },
                "last_update": {
                    "type": Sequelize.DATE,
                    "field": "last_update",
                    "defaultValue": Sequelize.Literal,
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
