const { up, left, down, right, talk } = require('./constants');
 
//stores the active TCP connection object
let connection;


const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (key === up) {
    connection.write('Move: up');
  }
  if (key === left) {
    connection.write('Move: left');
  }
  if (key === down) {
    connection.write('Move: down');
  }
  if (key === right) {
    connection.write('Move: right');
  }
  if (talk[key]) {
    connection.write(talk[key]);
  }

};
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);
  
  return stdin;

};

module.exports = {setupInput,
};