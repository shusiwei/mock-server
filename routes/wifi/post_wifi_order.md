##Wifi订单下单接口
####mock:
Method：GET/POST
URL：<http://192.168.9.9:3001/wifi/get_all_area_list>

###接口入参：
```javascript
{
  channel_code: String // 渠道编码
  type: Number // 取货方式，1：自取, 2：邮寄,
  takeStoreId: Number // 取货网点ID（当自取时）
  returnStoreId: Number // 归还网点ID（当自取时）
  postId: Number // 邮寄地址ID（当邮寄时）,
  providerId: Number // 供应商ID
  name: String // 取货人姓名
  mobile: Number // 取货人手机
  leaveDate: String // 出国日期
  returnDate: String // 回国日期,
  proId: Number // Wifi设备ID,
  count: Number // 设备数量
}
```

###返回数据：
```javascript
{
  status: Number  // 状态
  data: {
    orderNumber: Number // 订单号,
    payUrl: String // 支付地址
  },
  msg: String  // 消息
}
```
