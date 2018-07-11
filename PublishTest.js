var mqtt = require('mqtt');

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

var options = {
    username: 'still',
    password: Buffer.alloc(6, 'dillon'), // Passwords are buffers
}  
var client  = mqtt.connect(brokerAddress, options);

client.on('connect', function () {
    setInterval(function() {
        client.publish('still/columnTemp/cmnd/status', '10');
        console.log('Message Sent');
    }, 5000);
});