##搜索数据
####mock:
Method：GET/POST
URL：<http://192.168.9.9:3001/search/get_data_list>

###接口入参：
```javascript
{
  keyword: String  // 搜索关键字，空格分隔如：美食 交通,
  page: Number // 页码,
  pageSize: Number (10)  // 分页大小，默认每页10条
  channel_code: String // 渠道编码
}
```

###返回数据：
```javascript
{
  status: Number  // 状态
  data: {
    hostList: [String, String, String, String]  // 热门关键词，入参没有key时返回，如果没有数据则返回空数组，最多8条
    list: [
      {
        type: Number [1/2/3/4]  // 数据类型，1：资讯，2：优惠券，3：淘流量，4：服务
        id: Number  // ID
        title: String  // 标题
        date: Number  // 发布时间，13位时间戳
        maxImg: String  // 大图
        minImg: [String, String, String]  // 小图
        showType: Number [1/2]  // 图片展示方式
        serviceType: Number [0/1]  // 服务链接类型（仅服务），1为内部链接，0为外部链接
        serviceLink: String  // 服务外部链接地址（仅服务）
      }, {
        ......
      },
      ......
    ]  // 搜索数据，入参没有key时不返回，如果没有数据则返回空数组
    shopList: [
      {
        id: Number  // 商家ID
        name: String  // 商家名称
        logo: String  // 商家名称LOGO图片
        auth: Boolean  // 商家是否为认证商家
      }, {
        ......
      },
      ......
    ], // 搜索商家数据，入参没有key时不返回，page不为1时不返回，如果没有数据则返回空数组
    nowTimeStamp: Number // 当前系统时间，13位时间戳,
    pageCount: Number  // 搜索结果总页数（默认每页10条）
  },
  msg: String  // 消息
}
```
