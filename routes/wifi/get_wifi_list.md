##根据地区名搜索Wifi列表
####mock:
Method：GET/POST
URL：<http://192.168.9.9:3001/wifi/get_wifi_list>

###接口入参：
```javascript
{
  channel_code: String // 渠道编码,
  keyword: String // 关键字，如果关键词为“all”时得到全部wifi产品
}
```

###返回数据：
```javascript
{
  status: Number  // 状态
  data: {
    list: [
      {
        id: Number // 产品ID
        title: String  // 产品标题
        price: Number  // 租赁价格,
        postPrice: Number // 邮寄价格,
        tag: [String, String, ...] // 产品标签,
        deposit: Number // 押金,
        minDays: Number // 最低租期,
        citys: [Number, Number, Number, Number] // 支持自取的城市ID
      }, {
        ......
      },
      ......
    ] // wifi列表
  },
  msg: String  // 消息
}
```
