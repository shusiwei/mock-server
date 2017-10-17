const Mock = require('mockjs');
const Random = Mock.Random;
const {decrypt} = require('crypto-js/aes');
const Utf8 = require('crypto-js/enc-utf8');

Random.extend({
  get_main_data_img: (size, min, max) => Random.image(size, Random.color(), Random.color(), Random.ctitle(min, max)),
  get_main_data_hotList: () => {
    return Mock.mock({
      'areaCode|1-2000': 1,
      'areaName': Random.ctitle(2, 4),
      'logo': '@get_main_data_img(200, 2, 4)',
      'price': 9.9
    });
  }
});

module.exports = function (req, res) {
  const body = decrypt(req.body.payload, '1234').toString(Utf8);
  console.log(body);

  res.send(Mock.mock({
    status: 1,
    msg: 'ok',
    data: {
      'unpaid|0-2': 1,
      'hotList|8': ["@get_main_data_hotList"]
    }
  }));
};
