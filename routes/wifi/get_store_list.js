const Mock = require('mockjs');
const Random = Mock.Random;

Random.extend({
  get_store_list_list: () => {
    return Mock.mock({
      'storeId|1-2000': 1,
      'storeName': Random.ctitle(8, 14),
      'workTime': '7:00 - 22:00',
      'phone': '13316990189',
      'address': '深圳市龙岗区坂田街道雅宝路1号星河WORLD B座28楼游惠宝',
    });
  }
});

module.exports = function (req, res) {
  res.send(Mock.mock({
    status: 1,
    msg: 'ok',
    data: {
      'list|10': ["@get_store_list_list"]
    }
  }));
};
