/**
@param area_code
@param channel_code
@param user_id
*/

module.exports = {
    // 签到得到的流量币
    "checkinFlowcoin": 5,
    // 游惠宝卡
    "simData": {
        // 支持的地区
        "areaSupport": [852, 853, 88, 89],
        // 原价
        "origPrice": 9.9,
        // 优惠价
        "realPrice": 8.8,
        // 优惠标签
        "label": "限时特惠"
    },
    // WiFi是否支持该地区
    "wifiData": {
        // 支持的地区
        "areaSupport": [852, 853, 88, 89],
        // 原价
        "origPrice": 9.9,
        // 优惠价
        "realPrice": 8.8,
        // 优惠标签
        "label": "限时特惠"
    },
    // 运营商国际漫游包是否支持该地区
    "roamingData": {
        "unicom": {
            // 支持的地区
            "areaSupport": [852, 853, 88, 89],
            // 原价
            "origPrice": 9.9,
            // 优惠价
            "realPrice": 8.8,
            // 优惠标签
            "label": "限时特惠"
        },
        "telecom": {
            // 支持的地区
            "areaSupport": [852, 853, 88, 89],
            // 原价
            "origPrice": 9.9,
            // 优惠价
            "realPrice": 8.8,
            // 优惠标签
            "label": "限时特惠"
        },
        "mobile": {
            // 支持的地区
            "areaSupport": [852, 853, 88, 89],
            // 原价
            "origPrice": 9.9,
            // 优惠价
            "realPrice": 8.8,
            // 优惠标签
            "label": "限时特惠"
        }
    },
    // 优惠券列表，如无则为空数组（参数: area_code, channel_code）
    "couponList": [
        {
            // 优惠券ID
            "couponId": 10,
            // 优惠券标题
            "couponName": "优惠券标题",
            // 核销开始时间
            "startDate": 1508120885000,
            // 核销结束时间
            "endDate": 1508120885000,
            // 已领取数
            "count": 86,
            // 图片
            "image": "url",
            // 标签
            "label": "限时特惠"
        }, {
            // 优惠券ID
            "couponId": 10,
            // 优惠券标题
            "couponName": "优惠券标题",
            // 核销开始时间
            "startDate": 1508120885000,
            // 核销结束时间
            "endDate": 1508120885000,
            // 已领取数
            "count": 86,
            // 图片
            "image": "url",
            // 标签
            "label": "限时特惠"
        }, {
            // 优惠券ID
            "couponId": 10,
            // 优惠券标题
            "couponName": "优惠券标题",
            // 核销开始时间
            "startDate": 1508120885000,
            // 核销结束时间
            "endDate": 1508120885000,
            // 已领取数
            "count": 86,
            // 图片
            "image": "url",
            // 标签
            "label": "限时特惠"
        }
    ],
    // 淘流量列表，如无则为空数组（参数: area_code, channel_code）
    "taoTaskList": [
        {
            // 任务ID
            "taskId": 10,
            // 任务标题
            "taskName": "优惠券标题",
            // 完成数
            "count": 86,
            // 图片
            "image": "url",
            // 赠送数量
            "cost": 10
        }, {
            // 任务ID
            "taskId": 10,
            // 任务标题
            "taskName": "优惠券标题",
            // 完成数
            "count": 86,
            // 图片
            "image": "url",
            // 赠送数量
            "cost": 10
        }, {
            // 任务ID
            "taskId": 10,
            // 任务标题
            "taskName": "优惠券标题",
            // 完成数
            "count": 86,
            // 图片
            "image": "url",
            // 赠送数量
            "cost": 10
        }
    ],
    // 用户数据，没有登录则无此数据
    "userData": {
        // 用户拥有的ICCID卡
        "iccidList": {
            // 以前的接口数据
            // 最后使用/绑定时间
            "lastUseDate": 1508120885000
        },
        // 最后一次租的WIFI
        "wifiData": {
            // 套餐ID
            "wifiId": 965,
            // 套餐名称
            "wifiName": "中港澳通用WIFI租赁",
            // 起租日期
            "startDate": 1508120885000,
            // 止租日期
            "endDate": 1508120885000,
            // 运营商电话
            "telPhone": "0755-88889999"
        },
        // 最后一次订购的运营商境外流量包
        "packetData": {
            // 套餐ID
            "packetId": 965,
            // 套餐名称
            "packetName": "中港澳通用WIFI租赁",
            // 起购日期
            "startDate": 1508120885000,
            // 到期日期
            "endDate": 1508120885000,
            // 运营商编码
            "operatorType": 1
        },
        // 游惠宝卡热卖套餐，如无则为空数组（参数: areaCode, iccid）
        "simHotPacket": [
            {
                // 套餐ID
                "mealId": 58,
                // 套餐时长
                "mealDate": 1,
                // 套餐大小（单位M，0为不限量）
                "mealSize": 1024,
                // 原价
                "origPrice": 9.9,
                // 优惠价
                "realPrice": 8.8,
                // 优惠标签
                "label": "限时特惠"
            }, {
                // 套餐ID
                "mealId": 58,
                // 套餐时长
                "mealDate": 1,
                // 套餐大小（单位M，0为不限量）
                "mealSize": 1024,
                // 原价
                "origPrice": 9.9,
                // 优惠价
                "realPrice": 8.8,
                // 优惠标签
                "label": "限时特惠"
            }
        ],
        // 运营商流量包推荐，如无则为空数组（参数: area_code）
        "roamingPacket": [
            {
                // 套餐ID
                "packetId": 25,
                // 套餐名称
                "packetName": "套餐名称",
                // 原价
                "origPrice": 9.9,
                // 优惠价
                "realPrice": 8.8,
                // 优惠标签
                "label": "限时特惠"
            }, {
                // 套餐ID
                "packetId": 25,
                // 套餐名称
                "packetName": "套餐名称",
                // 原价
                "origPrice": 9.9,
                // 优惠价
                "realPrice": 8.8,
                // 优惠标签
                "label": "限时特惠"
            }
        ],
        // 随身WIFI推荐，如无则为空数组（参数: area_code）
        "wifiReco": [
            {
                // 套餐ID
                "wifiId": 965,
                // 套餐名称
                "wifiName": "中港澳通用WIFI租赁",
                // 套餐大小
                "flowSize": 0,
                // 押金
                "deposit": 500,
                // 起租天数
                "minDays":3,
                // 网络类型
                "netType": 1,
                // 供应商
                "providerName": "漫游超人",
                // 原价
                "origPrice": "35.00",
                // 优惠价
                "realPrice": "35.00",
                // 优惠标签
                "label": "限时特惠"
            }, {
                // 套餐ID
                "wifiId": 965,
                // 套餐名称
                "wifiName": "中港澳通用WIFI租赁",
                // 套餐大小
                "flowSize": 0,
                // 押金
                "deposit": 500,
                // 起租天数
                "minDays":3,
                // 网络类型
                "netType": 1,
                // 供应商
                "providerName": "漫游超人",
                // 原价
                "origPrice": "35.00",
                // 优惠价
                "realPrice": "35.00",
                // 优惠标签
                "label": "限时特惠"
            }, {
                // 套餐ID
                "wifiId": 965,
                // 套餐名称
                "wifiName": "中港澳通用WIFI租赁",
                // 套餐大小
                "flowSize": 0,
                // 押金
                "deposit": 500,
                // 起租天数
                "minDays":3,
                // 网络类型
                "netType": 1,
                // 供应商
                "providerName": "漫游超人",
                // 原价
                "origPrice": "35.00",
                // 优惠价
                "realPrice": "35.00",
                // 优惠标签
                "label": "限时特惠"
            }
        ]
    }
}