'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "updatedAt" to table "products"
 * addColumn "createdAt" to table "products"
 *
 **/

var info = {
    "revision": 3,
    "name": "product_update",
    "created": "2019-07-18T15:41:35.676Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "products",
            "updatedAt",
            {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "products",
            "createdAt",
            {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": true
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
