const Mock = require('mockjs');
const Random = Mock.Random;

Random.extend({
  get_all_area_list_img: (size, min, max) => Random.image(size, Random.color(), Random.color(), Random.ctitle(min, max)),
  get_all_area_list_hotList: () => {
    return Mock.mock({
      'areaId|1-2000': 1,
      'areaName': Random.ctitle(2, 4),
      'logo': '@IMG(200, 2, 4)',
      'price': 9.9
    });
  },
  get_all_area_list_list: () => () => {
    return Mock.mock({
      'areaId|1-2000': 1,
      'areaName': Random.ctitle(2, 4)
    });
  },
  get_all_area_list_cityList: () => {
    return Mock.mock({
      'cityId|1-2000': 1,
      'cityName': Random.city()
    });
  }
});

module.exports = function (req, res) {
  res.send(Mock.mock({
    status: 1,
    msg: 'ok',
    data: {
      'list|0-10': ['@get_all_area_list_list'],
      'hotList|8': ["@get_all_area_list_hotList"],
      'cityList|4-8': ["@get_all_area_list_cityList"]
    }
  }));
};
