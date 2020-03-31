// pages/gouwuche/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // as:[1,2,3,4,5,6,7,8,9,10,11,12],
    operate:'delete',//balance & delete
    as: [{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4}, { name: 5 }, { name: 6 }, { name: 7 }, { name: 8 }, { name: 9 }, { name: 10 }, { name: 11 }, { name: 12 }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '购物车',
    })
  },
  checkboxChange:function(e){},
  transform:function(){
    var ope=this.data.operate;
    if(ope=="balance"){
      this.setData({
        operate:'delete'
      })
    }else{
      this.setData({
        operate:'balance'
      })
    }
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