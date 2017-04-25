##Wifi首页
####mock:
Method：GET/POST
URL：<http://192.168.9.9:3001/wifi/get_main_data>

###接口入参：
```javascript
{
  channel_code: String // 渠道编码
}
```

###返回数据：
```javascript
{
  status: Number  // 状态
  data: {
    unpaid: 1 // 未支付订单总数，如用户未登录，则为0
    hotList: [
      {
        areaCode: Number // 地区ID
        areaName: String  // 地区名称
        logo: String  // 地区LOGO图片
        price: Number  // 租赁价格
      }, {
        ......
      },
      ......
    ] // 热门wifi数据
  },
  msg: String  // 消息
}
```
