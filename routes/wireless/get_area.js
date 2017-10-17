const json = require('./area.js');

module.exports = function (req, res) {
  res.send(JSON.stringify({
    status: 1,
    data: json,
    msg: ''
  }));
};
