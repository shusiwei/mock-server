##搜索数据
####mock:
Method：GET/POST
URL：<http://192.168.9.9:3001/wifi/get_main_data_list>

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
    hotList: [
      {
        id: Number // 地区ID
        name: String  // 地区名称
        img: String  // 地区LOGO图片
        price: Float  // 租赁价格
      }, {
        ......
      },
      ......
    ] // 热门wifi数据
  },
  msg: String  // 消息
}
```
