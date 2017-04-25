##Wifi设备详情
####mock:
Method：GET/POST
URL：<http://192.168.9.9:3001/wifi/get_wifi_detail>

###接口入参：
```javascript
{
  id: Number // wifi产品ID
}
```

###返回数据：
```javascript
{
  status: Number  // 状态
  data: {
    id: Number // 产品ID
    name: String  // 产品标题
    lowPrice: Number  // 最低价格,
    highPrice: Number // 最高价格,
    deposit: Number // 押金,
    minDays: Number // 最低租期
    providerId: Number // 供应商ID,
    providerName: String // 供应商名称
    netType: Number // 数据类型，1：4G, 2：3G （此处可能与供应商不同）,
    flowSize: Number // 流量大小，如为不限流量则为0
    shareNumber: Number // 共享设备数，如不限则为0
    standbyTime: Number // 设备待机时长
    expType: Number // 领取方式0:快递  1：自取 2：快递&自取
    citys: [
      {
        cityCode: String // 城市ID
        cityName: String // 城市名
      }, {
        ......
      },
      ......
    ] // 支持取还的城市
    content: String // 商品介绍
    nowTimeStamp: Number // 当前系统时间，13位时间戳
  },
  msg: String  // 消息
}
```
