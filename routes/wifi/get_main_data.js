const Mock = require('mockjs');
const Random = Mock.Random;

Random.extend({
  get_main_data_img: (size, min, max) => Random.image(size, Random.color(), Random.color(), Random.ctitle(min, max)),
  get_main_data_hotList: () => {
    return Mock.mock({
      'areaId|1-2000': 1,
      'areaName': Random.ctitle(2, 4),
      'logo': '@get_main_data_img(200, 2, 4)',
      'price': 9.9
    });
  }
});

module.exports = function (req, res) {
  res.send(Mock.mock({
    status: 1,
    msg: 'ok',
    data: {
      'hotList|8': ["@get_main_data_hotList"]
    }
  }));
};
