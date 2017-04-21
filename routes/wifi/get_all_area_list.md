##搜索页基础数据
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
        areaId: Number // 地区ID
        areaName: String  // 地区名称
        logo: String  // 地区LOGO图片
        price: Number  // 租赁价格
      }, {
        ......
      },
      ......
    ] // 热门国家数据
    list: [
      {
        areaId: Number // 地区ID
        areaName: String // 地区名称
      }, {
        ......
      },
      ......
    ] // 全部国家数据,
    cityList: [
      {
        cityId: Number // 城市ID
        cityName: String // 城市名称
      }, {
        ......
      },
      ......
    ] // 自取城市网点列表
  },
  msg: String  // 消息
}
```
