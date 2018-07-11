//broker.js
var mosca = require('mosca');
var settings = {
		port:1883
		}

var server = new mosca.Server(settings);

server.on('ready', function(){
    server.authenticate = authenticate;
    server.authorizePublish = authorizePublish;
    server.authorizeSubscribe = authorizeSubscribe;
    console.log("ready");
});






// Accepts the connection if the username and password are valid
var authenticate = function(client, username, password, callback) {
    console.log('Username: ', username);
    console.log('Password:', password.toString('utf-8'));
    var authorized = (username === 'still' && password.toString('utf-8') === 'dillon');
    if (authorized) client.user = username;
    console.log('Authorized: ', authorized);
    callback(null, authorized);
  }
  
// In this case the client authorized as alice can publish to /users/alice taking
// the username from the topic and verifing it is the same of the authorized user
var authorizePublish = function(client, topic, payload, callback) {
    callback(null, true);
}
  
// In this case the client authorized as alice can subscribe to /users/alice taking
// the username from the topic and verifing it is the same of the authorized user
var authorizeSubscribe = function(client, topic, callback) {
    callback(null, true);
}