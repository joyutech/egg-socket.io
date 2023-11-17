'use strict';

const { Server } = require('socket.io');
require('./namespace');
require('./socket');

Server.prototype.route = function() {
  return this.sockets.route.apply(this.sockets, arguments);
};

module.exports = Server;
