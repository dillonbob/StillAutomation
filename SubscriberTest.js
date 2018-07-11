var mqtt = require('mqtt')

var options = {
    username: 'still',
    password: Buffer.alloc(6, 'dillon'), // Passwords are buffers
}  
var client  = mqtt.connect('mqtt://192.168.1.252', options)

client.on('connect', function () {
    client.subscribe('still/columnTemp/STATUS10');
})

client.on('message', function (topic, message) {
    context = message.toString();
    console.log(context);
})