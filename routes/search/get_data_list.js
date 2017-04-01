const Mock = require('mockjs');
const Random = Mock.Random;

Random.extend({
  key: () => Random.cword(1, 10),
  img: (size, min, max) => Random.image('750x270', Random.color(), Random.color(), Random.ctitle(min, max)),
  list: () => {
    const data = Mock.mock({
      'type|1-4': 1,
      'id|1-2000': 1,
      'title': Random.ctitle(8, 30),
      'date|1420070400000-1490845403000': 1,
      'showType|1-2': 1,
      'maxImg': "@IMG('750x270', 2, 12)",
      'minImg|0-3': ["@IMG('200x200', 2, 2)"]
    });

    if (data.type === 4) {
      Object.assign(data, Mock.mock({
        'serviceType|0-1': 0,
        'serviceLink': Random.url('http')
      }));
    };

    return data;
  },
  shopList: () => {
    return Mock.mock({
      'id|1-500': 1,
      'name': Random.ctitle(2, 12),
      'logo': "@IMG('200x200', 2, 2)",
      'auth|1': true
    });
  }
});

module.exports = function (req, res) {
  const {keyword, page, pageSize} = req.method === 'POST' ? req.body : req.query;
  const result = {};

  if (!keyword) {
    Object.assign(result, Mock.mock({
      status: 1,
      msg: 'ok',
      data: {
        'hostList|0-10': ["@KEY"],
        'nowTimeStamp': Date.parse(new Date()),
        'pageCount': 0
      }
    }));
  } else {
    Object.assign(result, Mock.mock({
      status: 1,
      msg: 'ok',
      data: {
        'hostList|0-10': [],
        'list|0-10': ["@LIST"],
        'nowTimeStamp': Date.parse(new Date()),
        'pageCount': 3
      }
    }));

    if (page === '1') {
      Object.assign(result.data, Mock.mock({
        'shopList|0-5': ["@SHOPLIST"]
      }));
    };
  };


  res.send(result);
};
