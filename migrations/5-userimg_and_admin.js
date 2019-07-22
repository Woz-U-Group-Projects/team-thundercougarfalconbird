'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "admin" to table "users"
 * addColumn "userImage" to table "users"
 *
 **/

var info = {
    "revision": 5,
    "name": "userimg_and_admin",
    "created": "2019-07-22T02:05:20.236Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "users",
            "admin",
            {
                "type": Sequelize.BOOLEAN,
                "field": "admin",
                "defaultValue": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "userImage",
            {
                "type": Sequelize.STRING(255),
                "field": "userImage",
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
