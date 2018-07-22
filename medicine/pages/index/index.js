//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '新闻资讯',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ],
    news: [
      {
        news_name: "人民日报山东分社：不能任由恐慌情绪蔓延，相关部门要回应问题疫苗",
        picture: [
          { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
          { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
          { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
        ]
      },
      {
        news_name: "人民日报山东分社：不能任由恐慌情绪蔓延，相关部门要回应问题疫苗",
        picture: [
          { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
          { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
          { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
        ]
      }
    ]
  }
})
