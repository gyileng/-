const app = getApp()

Page({
  data: {
    showView: true,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    feed: [
      {
        article_id: 1,
        question: "甲亢怎么治？",
        answer_ctnt: "药物治疗适合甲亢孕妇、儿童、甲状腺轻度肿大的患者，治疗一般需要1～2年，治疗中需要根据甲状腺功能情况增减药物剂量。建议多食高热量，高蛋白质，高维生素的食物，如肉类，蛋及豆类食品和各种新鲜蔬菜。",
      },
      {
        article_id: 2,
        question: "甲亢怎么治？",
        answer_ctnt: "药物治疗适合甲亢孕妇、儿童、甲状腺轻度肿大的患者，治疗一般需要1～2年，治疗中需要根据甲状腺功能情况增减药物剂量。建议多食高热量，高蛋白质，高维生素的食物，如肉类，蛋及豆类食品和各种新鲜蔬菜。",
      }
    ]
  },
  change: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  }
})