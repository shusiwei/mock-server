##根据地区名搜索Wifi列表
####mock:
Method：GET/POST
URL：<http://192.168.9.9:3001/wifi/get_wifi_list>

###接口入参：
```javascript
{
  channel_code: String // 渠道编码,
  city_code: String // 地区编码，全部城市则不传
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
        lowPrice: Number  // 最低价格,
        highPrice: Number // 最高价格,
        providerId: Number // 供应商ID,
        providerName: String // 供应商名称
        deposit: Number // 押金,
        minDays: Number // 最低租期
        flowSize: Number // 流量大小，如为不限流量则为0
        expType: Number // 领取方式0:快递  1：自取 2：快递&自取
      }, {
        ......
      },
      ......
    ] // wifi列表
  },
  msg: String  // 消息
}
```
