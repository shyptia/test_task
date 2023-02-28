const upd = require('dgram');

const server = upd.createSocket('udp4');
const PORT = 2222;

const storage = {};
const minute = 60000;

server.on('message', function (msg, rinfo) {
  const data = msg.toString();

  console.log(`Server got ${data} from ${rinfo.address}:${rinfo.port}`);

  storage[msg] = new Date();
});

setInterval(() => {
  const time = new Date();

  for (const client in storage) {
    if (time - storage[client] > minute) { 
      console.log(`There is no connection with ${client}`);
    }
  }
}, 10000);

server.on('error', (err) => {
  console.error(`Error occured!`);
  server.close();
});

server.bind(PORT, () => {
  console.log(`Server is running on the http://localhost:${PORT} 🚀🚀🚀`);
});