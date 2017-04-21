##根据城市得到网点列表
####mock:
Method：GET/POST
URL：<http://192.168.9.9:3001/wifi/get_store_list>

###接口入参：
```javascript
{
  city_id: Number // 城市ID,
  type: Number // 0：取, 1：还
}
```

###返回数据：
```javascript
{
  status: Number  // 状态
  data: {
    list: [
      {
        storeId: Number // 网点ID
        storeName: String  // 网点标题
        workTime: String // 营业时间
        phone: String // 网点电话
        address: String // 网点地址
      }, {
        ......
      },
      ......
    ] // 网点列表数据
  },
  msg: String  // 消息
}
```
