const Mock = require('mockjs');
const Random = Mock.Random;

Random.extend({
  get_wifi_detail_city: () => {
    return Mock.mock({
      'cityId|1-2000': 1,
      'cityName': Random.ctitle(2, 2)
    });
  },
  get_wifi_detail_detail: () => {
    return Mock.mock({
      'id|1-2000': 1,
      'name': Random.ctitle(8, 14),
      'lowPrice|9-19': 1,
      'highPrice|10-20': 1,
      'tag|0-2': [Random.ctitle(2, 4)],
      'deposit|100-300': 1,
      'minDays|3-7': 1,
      'providerId|1-2000': 1,
      'providerName': Random.ctitle(3, 6),
      'netType|1-2': 1,
      'flow|0-1024': 0,
      'shareNumber|1-10': 0,
      'standbyTime|15-24': 0,
      'citys|2-8': ['@get_wifi_detail_city'],
      'content': Random.cparagraph(200, 500),
      'nowTimeStamp': Date.parse(new Date())
    });
  }
});

module.exports = function (req, res) {
  res.send(Mock.mock({
    status: 1,
    msg: 'ok',
    data: '@get_wifi_detail_detail'
  }));
};