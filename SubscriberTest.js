var mqtt = require('mqtt')

var myArgs = process.argv.slice(2);
switch (myArgs[0]) {
    case 'mac':
        var brokerAddress = 'mqtt://192.168.1.252';
        console.log('Running on Mac.');
        break;
    case 'pi':
        var brokerAddress = 'mqtt://192.168.1.251';
        console.log('Running on Raspberry Pi.');
        break;
    default:
        var brokerAddress = 'mqtt://192.168.1.252';
        console.log('Running on Mac.');
}

var myArgs = process.argv.slice(2);


var options = {
    username: 'still',
    password: Buffer.alloc(6, 'dillon'), // Passwords are buffers
}  
var client  = mqtt.connect(brokerAddress, options)

client.on('connect', function () {
    client.subscribe('still/columnTemp/STATUS10');
})

client.on('message', function (topic, message) {
    context = message.toString();
    console.log(context);
})