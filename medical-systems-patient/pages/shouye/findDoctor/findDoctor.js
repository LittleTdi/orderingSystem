// pages/shouye/findDoctor/findDoctor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    department: [{ name: '内科', expanded:false,children: ['心血管内科', '神经内科', '消化内科', '内分泌科', '免疫科', '呼吸内科', '肾病内科', '血液科', '感染内科','过敏反应科','老年病科','普通内科','高压氧科']},
      { name: '外科', expanded: false, children: ['功能神经外科', '神经外科', '心血管外科', '胸外科', '整形科', '乳腺外科', '泌尿外科', '肝胆外科', '肝肠科', '血管外科', '器官移植','微创外科','普外科']},
      { name: '妇产科学', expanded: false,children:[]},
      { name: '生殖中心', expanded: false,children: [] },
      { name: '儿科学', expanded: false,children: [] },
      { name: '骨科学', expanded: false,children: [] },
      { name: '口腔科学', expanded: false,children: [] },
      { name: '耳鼻咽喉头颈科', expanded: false,children: [] },
      { name: '皮肤性病科', expanded: false,children: [] },
      { name: '男科', expanded: false,children: [] },
      { name: '皮肤美容', expanded: false,children: [] },
      { name: '烧伤科', expanded: false,children: [] },
      { name: '精神心理科', expanded: false,children: [] }],
    img: ['../../../images/expand.png','../../../images/narrow.png']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  change:function(e){
    // console.log(e);
    var i=e.currentTarget.dataset.i;
    // console.log(i);
    var arr=this.data.department;
    arr[i].expanded=!arr[i].expanded;
    this.setData({
      department:arr
    })
  },
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