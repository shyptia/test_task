# test_task

In the file `trni.js` I use module `readline` to know fullname of user so you can lauch this file many time and write different user name and then send fullname to hostname = 'localhost', port = 2222 using UPD protocol.
In the file `rcv.js` server linstening to a new datagram is available on a socket.

To test project:
1. Clone this repository to you local machine.
2. Open terminal in the project.
3. Lauch server with `node rcv.js`.
3. Lauch `trni.js with `node trni.js`. Please enter you fullname.
