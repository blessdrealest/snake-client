const { IP, PORT } = require("./constants");
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    console.log("Successfully connected to the game server");
    conn.write('Name: BLE');
  });

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
};
