'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "wishlist", deps: [users, products]
 *
 **/

var info = {
    "revision": 6,
    "name": "wishlist_table",
    "created": "2019-07-24T00:50:39.017Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "wishlist",
        {
            "userId": {
                "type": Sequelize.INTEGER(11),
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "users",
                    "key": "userId"
                },
                "unique": "wishlist_productId_userId_unique",
                "field": "userId",
                "primaryKey": true,
                "allowNull": false
            },
            "productId": {
                "type": Sequelize.INTEGER(11),
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "products",
                    "key": "productId"
                },
                "unique": "wishlist_productId_userId_unique",
                "field": "productId",
                "primaryKey": true,
                "allowNull": false
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": true
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": true
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
