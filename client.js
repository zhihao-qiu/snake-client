const net = require("net");
const {IP, PORT, INITNAME} = require('./constants')

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT/// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on(('data'), (data) => console.log(data));

  // const movement = function() {
    // conn.write(`Move: up`);
    // setTimeout(movement, 500);
  // };
  conn.on(('connect'), () => {
    console.log('Successfully connected to game server');
    conn.write(`Name: ${INITNAME}`);
    // movement();
  });

  return conn;

};


module.exports = {
  connect
};