'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "productId" on table "products"
 * changeColumn "userId" on table "users"
 * changeColumn "productId" on table "user_products"
 * changeColumn "userId" on table "user_products"
 *
 **/

var info = {
    "revision": 8,
    "name": "update_patch_1",
    "created": "2019-08-01T19:30:22.837Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "changeColumn",
        params: [
            "products",
            "productId",
            {
                "type": Sequelize.INTEGER(11).UNSIGNED,
                "field": "productId",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "userId",
            {
                "type": Sequelize.INTEGER(11).UNSIGNED,
                "field": "userId",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "user_products",
            "productId",
            {
                "type": Sequelize.INTEGER(11).UNSIGNED,
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
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "user_products",
            "userId",
            {
                "type": Sequelize.INTEGER(11).UNSIGNED,
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
            }
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
