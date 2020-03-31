// pages/index/clueReport/clueReport.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    persontypes: [{ value: "未返电白本地常住居民", detail: "在2020-1-1之后一直没返电白本地常住居民" },
    { value: "持续在电白人员", detail: "在2010-1-1之前到目前一直在电白" }, { value: "一月初返电白本地常住居民", detail: "在1010-1-1至1010-1-15间来电白外地常住居民" },
    { value: "一月中返电白居民", detail: "于1010-1-15后返电白本地常住居民" }, { value: "一月中来电白人员", detail: "于2020-1-15后来电白外地临时人员" }, { value: "居家医学观察人员", detail: "" }, { value: "集中医学观察人员", detail: "" }],
    symptoms: ["自觉正常", "发热", "干咳", "乏力", "腹泻", "感冒", "头晕"],
    cardtypes:["身份证","驾驶证","户口本","护照"],
    involver:{
      name:null,
      sex:null,
      phone:null,
      date:null,
      cardtype:null,
      idcardNum:null,
      area:null,//地区
      detail:null,//详细地址
      carNum:null
    },
    self:{
      name:null,
      phone:null
    },
    sexarr:["男","女"],
    showDialog: false,
    istrue:false,
    areas:["茂南市","信宜市","高州市","电白区","化州市"]
  },
  openDialog: function () {
    this.setData({
      istrue: true
    })
  },
  closeDialog: function () {
    this.setData({
      istrue: false
    })
  },
  //反映人姓名
  inputName:function(e){
    // console.log(e);
    let arr=this.data.self;
    arr.name=e.detail.value;
    this.setData({
      self:arr
    })
  },
  //反映人联系方式
  inputPhone: function (e) {
    let arr=this.data.self;
    arr.phone=e.detail.value;
    this.setData({
      self:arr
    })
   },
  //涉事人姓名
  inputIname: function (e) { 
    let arr = this.data.involver;
    arr.name = e.detail.value;
    this.setData({
      involver: arr
    })
  },
  //涉事人联系方式
  inputIphone:function(e){
    let arr = this.data.involver;
    arr.phone = e.detail.value;
    this.setData({
      involver: arr
    })
  },
  //选择涉事人性别
  picksex:function(e){
    var arr = this.data.involver;
    arr.sex=this.data.sexarr[e.detail.value]
    this.setData({
      involver:arr
    })
  },
  //选择涉事人出生日期
  pickBornDate:function(e){
    console.log(e)
  },
  //选择证件类型
  pickcardtype:function(e){
    var arr = this.data.involver;
    arr.cardtype = this.data.cardtypes[e.detail.value]
    this.setData({
      involver: arr
    })
  },
  //输入证件号
  inputIcardNum:function(e){
    let arr = this.data.involver;
    arr.idcardNum = e.detail.value;
    this.setData({
      involver: arr
    })
  },
  //详细地址
  inputIdetail:function(e){
    let arr = this.data.involver;
    arr.detail = e.detail.value;
    this.setData({
      involver: arr
    })
  },
  //车牌号
  inputIcarNum:function(e){
    let arr = this.data.involver;
    arr.carNum = e.detail.value;
    this.setData({
      involver: arr
    })
  },
  pickArea:function(e){
    // console.log(e)
    let areas=this.data.areas;
    let arr=this.data.involver;
    arr.area=areas[e.currentTarget.dataset.i];
    this.setData({
      istrue:false,
      involver:arr
    })
  },
  submit:function(){
    console.log(this.data.involver);
    console.log(thi.data.self)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "疫情线索上报"
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