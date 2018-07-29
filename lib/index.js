'use strict';

// Load modules

const Server = require('./server');

require('events').EventEmitter.prototype._maxListeners = 2000;

process.setMaxListeners(0);

// Declare internals

const internals = {};


exports.Server = Server;
exports.server = Server;
