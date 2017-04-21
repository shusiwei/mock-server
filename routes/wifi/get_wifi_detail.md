##Wifi设备详情
####mock:
Method：GET/POST
URL：<http://192.168.9.9:3001/wifi/get_wifi_list>

###接口入参：
```javascript
{
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
        name: String  // 产品标题
        price: Number  // 租赁价格,
        postPrice: Number // 邮寄价格,
        tag: [String, String, ...] // 产品标签,
        deposit: Number // 押金,
        minDays: Number // 最低租期
        providerId: Number // 供应商ID,
        providerName: String // 供应商名称
        netType: Number // 数据类型，1：4G, 2：3G （此处可能与供应商不同）,
        flow: Number // 流量大小，如为不限流量则为0
        shareNumber: Number // 共享设备数，如不限则为0
        standbyTime: Number // 设备待机时长
        citys: [
          {
            cityId: Number // 城市ID
            cityName: String // 城市名
          }, {
            ......
          },
          ......
        ] // 支持取还的城市
        content: String // 商品介绍
      }, {
        ......
      },
      ......
    ] // 热门wifi数据
  },
  msg: String  // 消息
}
```
