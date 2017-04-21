const Mock = require('mockjs');
const Random = Mock.Random;

Random.extend({
  get_wifi_list_cityId: () => {
    return Random.integer(1, 200);
  },
  get_wifi_list: () => {
    return Mock.mock({
      'id|1-2000': 1,
      'title': Random.ctitle(8, 14),
      'price|9.9-19.9': 10,
      'postPrice|8-12': 1,
      'tag|0-2': [Random.ctitle(2, 4)],
      'deposit|100-300': 1,
      'minDays|3-7': 1,
      'citys|2-10': ['@get_wifi_list_cityId']
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
