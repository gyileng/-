//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '新闻资讯',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    articles: [

    ],
    sections: [{
        "name": "国内",
        "active": true
      },
      {
        "name": "国际",
        "active": false
      },
    ]
  },
  onLoad: function() {
    var that = this
    wx.request({
      url: 'http://127.0.0.1:5000/index/chinese',
      method: 'post',
      success: function(res) {
        that.setData({
          articles: res.data.data
        })
      }
    })
  },
  onSectionClicked: function (e) {
    var sid = e.currentTarget.dataset.sid;
    //刷新选中状态
    for (var i in sectionData) {
      if (sectionData[i]['section_id'] == sid) {
        sectionData[i]['active'] = true
        currentSectionIndex = i
      }
      else
        sectionData[i]['active'] = false
    }
    this.setData({
      sections: sectionData
    });
  },
})