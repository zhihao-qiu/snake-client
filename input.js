const wKey = 'Move: up';
const aKey = 'Move: left';
const sKey = 'Move: down';
const dKey = 'Move: right';

// Stores the active TCP connection object.
let connection;

const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  connection = conn;

  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(data) {
  switch (data) {
    case '\u0003':
      process.exit();
    case 'w':
      connection.write(`${wKey}`);
      break;
    case 'a':
      connection.write(`${aKey}`);
      break;
    case 's':
      connection.write(`${sKey}`);
      break;
    case 'd':
      connection.write(`${dKey}`);
      break;
    default:
  }
};

module.exports = {
  setupInput
};