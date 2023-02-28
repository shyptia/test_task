const upd = require('dgram');
const readline = require('readline');

const client = upd.createSocket('udp4');
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const HOST_NAME = 'localhost';
const PORT = 2222;


terminal.question('What is your full name? ', (fullName) => {
  setInterval(() => {
    const data = Buffer.from(fullName);

    client.send(data, PORT, HOST_NAME, (error) => {
      if (error){
        console.log(error);

        client.close();
        terminal.close();
      } else{
        console.log('Message was sent!');
      }
    });
  }, 6000);
});
