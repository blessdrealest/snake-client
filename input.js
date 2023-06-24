 
 
 //stores the active TCP connection object
 let connection;

 const msg = "Say: ";
 const hi = "Hi there! ";
 const stay = "Stay a while...";
 const listen = "...and listen!";

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (key === MOVE_UP_KEY) {
    connection.write('Move: up');
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write('Move: left');
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write('Move: down');
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write('Move: right');
  }

  if (key === m) {
    connection.write(msg + hi);
  }
  if (key === n) {
    connection.write(hi + stay);
    }

 






};
const setupInput = function (conn) {
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