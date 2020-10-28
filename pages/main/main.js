// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:{
      img:"../../imgs/user.jpg",
      nick:"仲夏柠叶香",
      info:"课表 1 | 消息 5"
    },
    activeTab: 1,
    mainColor: "#27d09c",
    date : "今天",
    detail: "，周三，第3周，2节课",
    colors:[
      "#",
      "#",
      "#",
      "#",
      "#",
      "#",
      "#",
      "#"
    ],
    row0 :[
      "第3周\n9月",
      "周一\n9/21",
      "周二\n9/22",
      "周三\n9/23",
      "周四\n9/24",
      "周五\n9/25",
      "周六\n9/26",
      "周日\n9/27"
    ],
    table:[
      ["第1节\n08:00-09:30", "数据库系统", "", "数据库系统", "", "", "", ""],
      ["第2节\n09:50-12:10", "管理模型与决策", "", "", "网页设计与开发", "", "", ""],
      ["第3节\n09:50-12:10", "Java语言程序设计", "信息资源管理", "Java语言程序设计", "", "", "", ""],
      ["第4节\n09:50-12:10", "", "", "", "", "", "", ""],
      ["第5节\n09:50-12:10", "", "", "", "", "", "", ""],
      ["第6节\n09:50-12:10", "", "", "", "商务分析方法与工具", "", "", ""],
      ["第7节\n09:50-12:10", "", "", "", "", "", "", "形势与政策"]
    ]
  },

  onClickTab: function (e) {
    if (this.data.activeTab != e.currentTarget.dataset.index) {
      this.setData({
        activeTab: e.currentTarget.dataset.index
      })
    }
  },

  toPageUserInfo: function(){
    wx.navigateTo({
      url: '../user_info/user_info',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function(data) {
          console.log(data)
        },
        someEvent: function(data) {
          console.log(data)
        }
      },
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
      }
    })
  },

  toPageTheme:function(){
    wx.navigateTo({
      url: '../theme/theme',
    })
  },

  toPageScoreQuery:function(){
    wx.navigateTo({
      url: '../score_query/score_query',
    })
  },

  toPageTableManage:function(){
    wx.navigateTo({
      url: '../table_manage/table_manage',
    })
  },

  toPageFeedback:function(){
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },

  toPageAbout:function(){
    wx.navigateTo({
      url: '../about/about',
    })
  },

  toPageSetting:function(){
    wx.navigateTo({
      url: '../setting/setting',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})