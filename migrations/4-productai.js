'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "productId" on table "products"
 *
 **/

var info = {
    "revision": 4,
    "name": "productai",
    "created": "2019-07-19T02:03:06.292Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "changeColumn",
    params: [
        "products",
        "productId",
        {
            "type": Sequelize.INTEGER(11),
            "field": "productId",
            "autoIncrement": true,
            "primaryKey": true,
            "allowNull": false
        }
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
