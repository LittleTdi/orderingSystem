// pages/consultation/consultation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [{ name: "茂名市中医院", desc: "新型冠状病毒肺炎免费咨询", imgUrl:"../../images/con1.png"},
      { name: "茂名市人民医院", desc: "发热门诊免费咨询", imgUrl: "../../images/con2.png"},
      { name: "电白县中医院", desc: "新型冠状病毒肺炎免费咨询", imgUrl: "../../images/con3.png"},
      { name: "茂名第三人民医院", desc: "新型冠状病毒肺炎免费咨询", imgUrl: "../../images/con4.png"},
      { name: "高州市中医院", desc: "新型冠状病毒肺炎免费咨询", imgUrl: "../../images/con5.png"},
      { name: "高州市人民医院", desc: "新型冠状病毒肺炎免费咨询", imgUrl: "../../images/con6.png"}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "就诊指南"
    })
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