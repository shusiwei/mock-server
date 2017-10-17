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
        areaCode: Number // 地区ID
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
        areaCode: Number // 地区ID
        areaName: String // 地区名称
      }, {
        ......
      },
      ......
    ] // 全部国家数据,
    cityList: [
      {
        cityCode: Number // 城市ID
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


##根据城市得到网点列表
####mock:
Method：GET/POST
URL：<http://192.168.9.9:3001/wifi/get_store_list>

###接口入参：
```javascript
{
  city_code: Number // 城市ID,
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


##Wifi订单下单接口
####mock:
Method：GET/POST
URL：<http://192.168.9.9:3001/wifi/post_wifi_order>

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
