var server = require('cre-nodejs-server');

var handlers = [];

handlers = server.addDefaultHandlers(
  require('path').resolve(__dirname), // root 
  handlers,                           // only defaults
  '/Chat/Client/html/chat.html' // Start page
);

server.server.start(handlers);
