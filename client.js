const net = require("net");
const moves = ['up', 'up', 'up', 'up', 'left', 'left', 'left', 'down'];

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: '50541'/// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on(('data'), (data) => console.log(data));
  
  const movement = function(index) {
    if (index < moves.length) {
      conn.write(`Move: ${moves[index]}`);
      setTimeout(() => { conn.write(`Move: ${moves[index + 1]}`); }, 500);
    }
  };
  conn.on(('connect'), () => {
    console.log('Successfully connected to game server');
    conn.write("'Name: ZHQ' to the server, upon connection");
    movement(0);
  });

  return conn;

};


module.exports = {
  connect
};