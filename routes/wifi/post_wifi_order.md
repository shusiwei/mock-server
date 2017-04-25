##Wifi订单下单接口
####mock:
Method：GET/POST
URL：<http://192.168.9.9:3001/wifi/get_all_area_list>

###接口入参：
```javascript
{
  channel_code: String // 渠道编码
  exp_type: Number // 取货方式，1：自取, 2：邮寄,
  take_store_id: Number // 取货网点ID（当自取时）
  return_store_id: Number // 归还网点ID（当自取时）
  post_id: Number // 邮寄地址ID（当邮寄时）,
  provider_id: Number // 供应商ID
  name: String // 取货人姓名
  mobile: Number // 取货人手机
  leave_date: String // 出国日期
  return_date: String // 回国日期,
  pro_id: Number // Wifi设备ID,
  count: Number // 设备数量
  pay_type: String // 支付类型
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
