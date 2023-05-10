const wKey = 'Move: up';
const aKey = 'Move: left';
const sKey = 'Move: down';
const dKey = 'Move: right';
const num1Msg = 'Say: Hi, fellows!';
const num2Msg = 'Say: Follow me!';
const num3Msg = 'Say: Let\'s rock!';


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
    case '1':
      connection.write(`${num1Msg}`);
      break;
    case '2':
      connection.write(`${num2Msg}`);
      break;
    case '3':
      connection.write(`${num3Msg}`);
      break;

    default:
  }
};

module.exports = {
  setupInput
};