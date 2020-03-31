// pages/shangcheng/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    banner: ['../../../images/banner/banner1.png', '../../../images/banner/banner2.png'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    bgColor: ['#D1D1FC', '#FCCCCC', '#FEF9BA', '#FEE7CA', '#FFD1F9', '#F5CAFF', '#C0F8CB', '#C0F0F8', '#F4F8C0','#DEF9DF'],
    jgg:['感冒咳嗽','肠胃用药','中西药品','滋补药物','营养健康','护理护具','器械保健','家庭护理','美妆护肤','分类'],
    as:[1,2,3,4,5,6,7,8,9]
  },
  toPath:function(e){
    var index=e.currentTarget.dataset.i;
    // console.log(index);
    if(index==9){
      wx.navigateTo({
        url: '../cate/cate',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '药品商城',
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