var mqtt = require('mqtt');

var options = {
    username: 'still',
    password: Buffer.alloc(6, 'dillon'), // Passwords are buffers
}  
var client  = mqtt.connect('mqtt://192.168.1.252', options);

client.on('connect', function () {
    setInterval(function() {
        client.publish('still/columnTemp/cmnd/status', '10');
        console.log('Message Sent');
    }, 5000);
});