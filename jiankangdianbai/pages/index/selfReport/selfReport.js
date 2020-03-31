// pages/index/selfReport/selfReport.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex:null,
    sexarr:["男","女"],
    date:null,
    cardtype:null,
    cardnum:null,
    areas:["茂南区","信宜市","高州市","电白区","化州市"],
    address:null,
    daddress:null,//详细地址
    persontypes: [{value: "未返电白本地常住居民", detail:"在2020-1-1之后一直没返电白本地常住居民"},
      { value: "持续在电白人员", detail: "在2010-1-1之前到目前一直在电白"},{ value: "一月初返电白本地常住居民", detail: "在1010-1-1至1010-1-15间来电白外地常住居民" },
      { value: "一月中返电白居民", detail: "于1010-1-15后返电白本地常住居民" }, { value: "一月中来电白人员", detail: "于2020-1-15后来电白外地临时人员" }, { value: "居家医学观察人员", detail: "" }, { value: "集中医学观察人员", detail: "" }],
    symptoms:["自觉正常","发热","干咳","乏力","腹泻","感冒","头晕"]
  },
  picksex:function(e){
    console.log(e)
    let that=this;
    this.setData({
      sex: that.data.sexarr[e.detail.value]
    })
  },
  pickBornDate:function(e){},
  pickcardtype:function(e){},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "健康自查上报"
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