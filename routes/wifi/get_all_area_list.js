const Mock = require('mockjs');
const Random = Mock.Random;

Random.extend({
  img: (size, min, max) => Random.image(size, Random.color(), Random.color(), Random.ctitle(min, max)),
  hotList: () => {
    return Mock.mock({
      'id|1-2000': 1,
      'name': Random.ctitle(2, 4),
      'img': '@IMG(200, 2, 4)',
      'price|9.9-19.9': 0
    });
  },
  list: () => () => {
    return Mock.mock({
      'id|1-2000': 1,
      'name': Random.ctitle(2, 4)
    });
  },
  cityList: () => {
    return Mock.mock({
      'id|1-2000': 1,
      'name': Random.ctitle(2, 4)
    });
  }
});

module.exports = function (req, res) {
  res.send(Mock.mock({
    status: 1,
    msg: 'ok',
    data: {
      'list:0-10': ['@list']
      'hotList|8': ["@hotList"],
      'cityList': ["@cityList"]
    }
  }));
};
