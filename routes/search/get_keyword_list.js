const Mock = require('mockjs');
const Random = Mock.Random;

Random.extend({
  keyword: (keyword) => Random.cword(1, 3)
});

module.exports = function (req, res) {
  const {keyword} = req.method === 'POST' ? req.body : req.query;
  const result = {};

  if (!keyword) {
    Object.assign(result, Mock.mock({
      status: 1,
      msg: 'ok',
      data: {
        'list': []
      }
    }));
  } else {
    Object.assign(result, Mock.mock({
      status: 1,
      msg: 'ok',
      data: {
        'list|0-10': [keyword + "@KEYWORD"]
      }
    }));
  };

  res.send(result);
};
