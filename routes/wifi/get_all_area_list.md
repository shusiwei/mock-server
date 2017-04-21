##搜索数据
####mock:
Method：GET/POST
URL：<http://192.168.9.9:3001/wifi/get_all_area_list>

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
    ] // 热门国家数据
    list: [
      {
        id: Number // 地区ID
        name: String // 地区名称
      }, {
        ......
      },
      ......
    ] // 全部国家数据,
    cityList: [
      {
        id: Number // 城市ID
        name: String // 城市名称
      }, {
        ......
      },
      ......
    ] // 自取城市网点列表
  },
  msg: String  // 消息
}
```
