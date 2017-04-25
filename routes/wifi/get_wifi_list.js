const Mock = require('mockjs');
const Random = Mock.Random;

Random.extend({
  get_wifi_list: () => {
    return Mock.mock({
      'id|1-2000': 1,
      'title': Random.ctitle(8, 14),
      'lowPrice|9-19': 10,
      'highPrice|10-20': 1,
      'providerId|1-2000': 1,
      'providerName': Random.ctitle(8, 14),
      'deposit|100-300': 1,
      'minDays|3-7': 1,
      'flowSize|0-2048': 0
    });
  }
});

module.exports = function (req, res) {
  res.send(Mock.mock({
    status: 1,
    msg: 'ok',
    data: {
      'list|10': ["@get_wifi_list"]
    }
  }));
};
