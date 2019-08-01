'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "productId" on table "products"
 * changeColumn "userId" on table "users"
 *
 **/

var info = {
    "revision": 9,
    "name": "update_patch_2",
    "created": "2019-08-01T19:38:10.365Z",
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
