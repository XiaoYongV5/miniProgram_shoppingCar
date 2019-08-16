/**
*    2019/08/16 10:35
*    创建人  meiko
*/

// 元素出现的距离
let itemParams = {
    itemTop_e: [],
    itemTop_m: []
}
// 初始化请求的 商品列表数据
let enterpriseList, memberServiceList
// 计算购买的数量 以及购买的数据
let [COUNT_MONEY, COUNT_TOTAL, buyGoodsList] = [0, 0, []]

Page({
    data: {
        enterpriseList: [],
        memberServiceList: [],
        enterpriseItem: 0, // 企业服务
        memberItem: 0, // 会员服务
        current: 0,
        buyGoodsList: [],
        COUNT_MONEY: 0, // 计算的全部价格
        COUNT_TOTAL: 0, // 购买的数量
        selectGoods: false // 点击购物车详情的时候出现遮罩 以及内容
    },
    onLoad() {
        // 模拟请求真实数据
        setTimeout(() => {
            enterpriseList = [
                // 秘书服务
                {
                    name: '秘书服务',
                    data: [{
                            image: 'https://api.beeoffices.com/upload/xwork/servicesFiles/2019073012115166816.jpg',
                            name: '前台展示',
                            type: '秘书服务',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'https://api.beeoffices.com/upload/xwork/servicesFiles/2019073012115166816.jpg',
                            name: '后台展示',
                            type: '秘书服务',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'https://api.beeoffices.com/upload/xwork/servicesFiles/2019073012115166816.jpg',
                            name: '充值服务',
                            type: '秘书服务',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'https://api.beeoffices.com/upload/xwork/servicesFiles/2019073012115166816.jpg',
                            name: '蜜汁充值',
                            type: '秘书服务',
                            total: 0,
                            money: '300'
                        }
                    ]
                },
                // 工商注册
                {
                    name: '工商注册',
                    data: [{
                            image: 'https://api.beeoffices.com/upload/xwork/servicesFiles/2019073012115166816.jpg',
                            name: '前台展示',
                            type: '工商注册',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'https://api.beeoffices.com/upload/xwork/servicesFiles/2019073012115166816.jpg',
                            name: '后台展示',
                            type: '工商注册',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'https://api.beeoffices.com/upload/xwork/servicesFiles/2019073012115166816.jpg',
                            name: '工商注册',
                            type: '工商注册',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'https://api.beeoffices.com/upload/xwork/servicesFiles/2019073012115166816.jpg',
                            name: '蜜汁充值',
                            type: '工商注册',
                            type: '工商注册',
                            total: 0,
                            money: '300'
                        }
                    ]
                },
                // 财务审计
                {
                    name: '财务审计',
                    data: [{
                            image: 'https://api.beeoffices.com/upload/xwork/servicesFiles/2019073012115166816.jpg',
                            name: '前台展示',
                            type: '财务审计',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'https://api.beeoffices.com/upload/xwork/servicesFiles/2019073012115166816.jpg',
                            name: '后台展示',
                            type: '财务审计',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'https://api.beeoffices.com/upload/xwork/servicesFiles/2019073012115166816.jpg',
                            name: '',
                            type: '财务审计',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'https://api.beeoffices.com/upload/xwork/servicesFiles/2019073012115166816.jpg',
                            name: '蜜汁充值',
                            type: '财务审计',
                            total: 0,
                            money: '300'
                        }
                    ]
                },
                // 知识产权
                {
                    name: '知识产权',
                    data: [{
                            image: 'https://api.beeoffices.com/upload/xwork/servicesFiles/2019073012115166816.jpg',
                            name: '前台展示',
                            type: '知识产权',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'https://api.beeoffices.com/upload/xwork/servicesFiles/2019073012115166816.jpg',
                            name: '后台展示',
                            type: '知识产权',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'https://api.beeoffices.com/upload/xwork/servicesFiles/2019073012115166816.jpg',
                            name: '',
                            type: '知识产权',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'https://api.beeoffices.com/upload/xwork/servicesFiles/2019073012115166816.jpg',
                            name: '蜜汁充值',
                            type: '知识产权',
                            total: 0,
                            money: '300'
                        }
                    ]
                }
            ]
            memberServiceList = [
                // 美食特惠
                {
                    name: '美食特惠',
                    data: [{
                            image: 'http://img.redocn.com/sheji/20190529/shouhuidangaomeishishengripaiduiyuansu_10379403.jpg',
                            name: '榴莲千层蛋糕',
                            type: '美食特惠',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'http://img.redocn.com/sheji/20190529/shouhuidangaomeishishengripaiduiyuansu_10379403.jpg',
                            name: '榴莲千层蛋糕',
                            type: '美食特惠',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'http://img.redocn.com/sheji/20190529/shouhuidangaomeishishengripaiduiyuansu_10379403.jpg',
                            name: '榴莲千层蛋糕',
                            type: '美食特惠',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'http://img.redocn.com/sheji/20190529/shouhuidangaomeishishengripaiduiyuansu_10379403.jpg',
                            name: '榴莲千层蛋糕',
                            type: '美食特惠',
                            total: 0,
                            money: '300'
                        }
                    ]
                },
                // 下午茶
                {
                    name: '下午茶',
                    data: [
                        {
                            image: 'http://img.redocn.com/sheji/20190529/shouhuidangaomeishishengripaiduiyuansu_10379403.jpg',
                            name: '榴莲千层蛋糕',
                            type: '下午茶',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'http://img.redocn.com/sheji/20190529/shouhuidangaomeishishengripaiduiyuansu_10379403.jpg',
                            name: '榴莲千层蛋糕',
                            type: '下午茶',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'http://img.redocn.com/sheji/20190529/shouhuidangaomeishishengripaiduiyuansu_10379403.jpg',
                            name: '榴莲千层蛋糕',
                            type: '下午茶',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'http://img.redocn.com/sheji/20190529/shouhuidangaomeishishengripaiduiyuansu_10379403.jpg',
                            name: '榴莲千层蛋糕',
                            type: '下午茶',
                            total: 0,
                            money: '300'
                        }
                    ]
                },
                // 手机维修
                {
                    name: '手机维修',
                    data: [{
                            image: 'http://img.redocn.com/sheji/20190529/shouhuidangaomeishishengripaiduiyuansu_10379403.jpg',
                            name: '榴莲千层蛋糕',
                            type: '手机维修',
                            money: '300',
                            total: 0
                        },
                        {
                            image: 'http://img.redocn.com/sheji/20190529/shouhuidangaomeishishengripaiduiyuansu_10379403.jpg',
                            name: '榴莲千层蛋糕',
                            type: '手机维修',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'http://img.redocn.com/sheji/20190529/shouhuidangaomeishishengripaiduiyuansu_10379403.jpg',
                            name: '榴莲千层蛋糕',
                            type: '手机维修',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'http://img.redocn.com/sheji/20190529/shouhuidangaomeishishengripaiduiyuansu_10379403.jpg',
                            name: '榴莲千层蛋糕',
                            type: '手机维修',
                            total: 0,
                            money: '300'
                        }
                    ]
                },
                // 烟酒糖茶
                {
                    name: '烟酒糖茶',
                    data: [{
                            image: 'http://img.redocn.com/sheji/20190529/shouhuidangaomeishishengripaiduiyuansu_10379403.jpg',
                            name: '榴莲千层蛋糕',
                            type: '烟酒糖茶',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'http://img.redocn.com/sheji/20190529/shouhuidangaomeishishengripaiduiyuansu_10379403.jpg',
                            name: '榴莲千层蛋糕',
                            type: '烟酒糖茶',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'http://img.redocn.com/sheji/20190529/shouhuidangaomeishishengripaiduiyuansu_10379403.jpg',
                            name: '榴莲千层蛋糕',
                            type: '烟酒糖茶',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'http://img.redocn.com/sheji/20190529/shouhuidangaomeishishengripaiduiyuansu_10379403.jpg',
                            name: '榴莲千层蛋糕',
                            type: '烟酒糖茶',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'http://img.redocn.com/sheji/20190529/shouhuidangaomeishishengripaiduiyuansu_10379403.jpg',
                            name: '榴莲千层蛋糕',
                            type: '烟酒糖茶',
                            total: 0,
                            money: '300'
                        }
                    ]
                },
                // 行李箱包
                {
                    name: '行李箱包',
                    data: [{
                            image: 'http://img.redocn.com/sheji/20190529/shouhuidangaomeishishengripaiduiyuansu_10379403.jpg',
                            name: '榴莲千层蛋糕',
                            type: '行李箱包',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'http://img.redocn.com/sheji/20190529/shouhuidangaomeishishengripaiduiyuansu_10379403.jpg',
                            name: '榴莲千层蛋糕',
                            type: '行李箱包',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'http://img.redocn.com/sheji/20190529/shouhuidangaomeishishengripaiduiyuansu_10379403.jpg',
                            name: '榴莲千层蛋糕',
                            type: '行李箱包',
                            total: 0,
                            money: '300'
                        },
                        {
                            image: 'http://img.redocn.com/sheji/20190529/shouhuidangaomeishishengripaiduiyuansu_10379403.jpg',
                            name: '榴莲千层蛋糕',
                            type: '行李箱包',
                            total: 0,
                            money: '300'
                        }
                    ]
                },
            ]
            
            // 考虑到两张表 的商品 id 可能是一样的 所以我们要给一个类别  通过类别判断加入商品
            enterpriseList.map((item, index) => {
                item.data.map((items, itemIndex) => {
                    items['goodsID'] = `1-${index}-${itemIndex}`
                    items['goodsIndex'] = `${index},${itemIndex}`
                    items['goodsList'] = `enterpriseList`
                })
            })

            memberServiceList.map((item, index) => {
                item.data.map((items, itemIndex) => {
                    items['goodsID'] = `2-${index}-${itemIndex}`
                    items['goodsIndex'] = `${index},${itemIndex}`
                    items['goodsList'] = `memberServiceList`
                })
            })
            
            this.setData({
                enterpriseList: enterpriseList,
                memberServiceList: memberServiceList
            })
            // 获取元素距离顶部的距离
            this.getDomClientHeight('.enterpriseTitle', 'top', (params) => {
                itemParams.itemTop_e = params
            })
            this.getDomClientHeight('.memberTitle', 'top', (params) => {
                itemParams.itemTop_m = params
            })
        }, 1000)
    },
    // 获取节点信息
    getDomClientHeight(el, attr, fn) {
        const query = wx.createSelectorQuery()
        query.selectAll(el).boundingClientRect((rects) => {
            let params = []
            rects.forEach((rect) => {
                // rect.top     // 节点的上边界坐标
                // rect.height  // 节点的高度
                params.push(rect[attr])
            })
            fn && fn(params)
        }).exec()
    },
    // 企业服务 scroll 事件
    scrollView(e) {
        let scrollTop = e.detail.scrollTop
        let arrName = e.currentTarget.dataset.arr
        let watchName = e.currentTarget.dataset.watchitem
        let findIndex = -1
        let isClos = false
        itemParams[arrName].map((item, index) => {
            if (isClos) return
            if (scrollTop < item) {
                findIndex = index
                isClos = true
            }
        })
        this.setData({
            [watchName]: findIndex
        })
    },
    // 左右滑动 顶部menu 跟随当前页显示
    toggleService(event) {
        this.setData({
            current: event.detail.current
        })
    },
    // 对商品的操作
    handleGoods(event) {
        let parant = event.currentTarget.dataset.parant
        let index = event.currentTarget.dataset.index
        let list = event.currentTarget.dataset.list
        let handle = event.currentTarget.dataset.handle
        let updateStr = list + '[' + parant + '].data' + '[' + index + '].total'
        let currentData = this.data[list][parant].data[index]
        let [findEl, findIndex] = [[], -1]

        if (handle == '-') {
            --currentData.total
            COUNT_TOTAL--
            COUNT_MONEY -= Number(currentData.money)
            findEl = buyGoodsList.filter((item, index) => {
                findIndex = index
                return item.goodsID == currentData.goodsID
            })
            this.setData({
                ['buyGoodsList['+ findIndex +'].total']: currentData.total
            })
        } else {
            ++currentData.total
            COUNT_TOTAL++
            COUNT_MONEY += Number(currentData.money)

            // 如果是第一次添加商品
            if (buyGoodsList.length == 0) {
                buyGoodsList.push(currentData)
            } else {
                // 第二次 或者 第N次添加商品  查找是否有重复的
                findEl = buyGoodsList.filter((item, index) => {
                    findIndex = index
                    return item.goodsID == currentData.goodsID
                })
                // 如果已购买的商品里面没有的话 则 新增一个商品
                if (findEl.length == 0) { 
                    buyGoodsList.push(currentData)
                } else { // 如果已有的话则  增加数量
                    this.setData({
                        ['buyGoodsList['+ findIndex +'].total']: currentData.total
                    })
                }
            }
        }
        this.setData({
            [updateStr]: currentData.total,
            COUNT_TOTAL,
            COUNT_MONEY,
            buyGoodsList
        })
        
    },
    // 点击菜单栏切换 当前显示页
    selectMenuList(event) {
        let index = event.currentTarget.dataset.index
        this.setData({
            current: index
        })
    },
    // 点击购物车 || 点击遮罩 || 点击取消
    selectCar(event) {
        let status = Boolean(Number(event.currentTarget.dataset.status))
        this.setData({
            selectGoods: status
        })
    },
    // 购物车内的操作
    shoppingCarHandle(event) {
        let id = event.currentTarget.dataset.id
        let handle = event.currentTarget.dataset.handle
        let index = event.currentTarget.dataset.index
        let [findEl, findIndex] = [[], -1]
        let viewEl = buyGoodsList[index]

        // 找到对应的元素 在页面显示上同步 数据
        let goodsIndex = viewEl.goodsIndex.split(',')
        let updateEl = viewEl.goodsList + '[' + goodsIndex[0] + '].data[' + goodsIndex[1] +'].total'
        if (handle == '-') { // 减去数量
            --viewEl.total
            --COUNT_TOTAL
            COUNT_MONEY -= Number(buyGoodsList[index].money)
        } else { // 数量 + 1
            ++viewEl.total
            ++COUNT_TOTAL
            COUNT_MONEY += Number(buyGoodsList[index].money)
        }
        this.setData({
            COUNT_TOTAL: COUNT_TOTAL,
            COUNT_MONEY: COUNT_MONEY,
            [updateEl]: viewEl.total
        })
        if (viewEl.total <= 0) { // 小于等于 0 的时候 把这个商品从购物车中删除
            buyGoodsList.splice(index, 1)
            this.setData({
                buyGoodsList: buyGoodsList
            })
            if (COUNT_TOTAL == 0) { // 商品总数为 0 的时候则 隐藏
                this.setData({
                    selectGoods: false
                })
            }
        } else {
            this.setData({
                ['buyGoodsList['+ index +'].total']: viewEl.total
            })
        }
        
    },
    // 确认购买购物车中的物品
    sureBuy() {
    },
    // 清空购物车
    clearBuyList() {
        // 清空 购买的数据
        enterpriseList.map((item, index) => {
            item.data.map((items, itemIndex) => {
                items['total'] = 0
            })
        })
        memberServiceList.map((item, index) => {
            item.data.map((items, itemIndex) => {
                items['total'] = 0
            })
        })
        this.setData({
            buyGoodsList: [],
            COUNT_TOTAL: 0,
            COUNT_MONEY: 0,
            enterpriseList,
            memberServiceList,
            selectGoods: false
        })
    }
})
