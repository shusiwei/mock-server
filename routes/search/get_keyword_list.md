##搜索联想
####mock:
Method：GET/POST
URL：<http://192.168.9.9:3001/search/get_keyword_list>

###接口入参：
```javascript
{
  keyword: String  // 搜索关键字，空格分隔如：美食 交通
  channel_code: String // 渠道编码
  area_code: String // 地区编码
}
```

###返回数据：
```javascript
{
  status: Number  // 状态
  data: {
    list: [String, String, String, String]  //关联关键词，如果没有则为空数组，最多10条
  },
  msg: String  // 消息
}
```
