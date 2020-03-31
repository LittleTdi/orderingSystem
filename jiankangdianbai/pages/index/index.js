//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  toConsultation:function(){
    wx.navigateTo({
      url: '../../pages/consultation/consultation',
    })
  },
  toSelfReport:function(){
    wx.navigateTo({
      url: './selfReport/selfReport',
    })
  },
  toClue: function () {
    wx.navigateTo({
      url: './clueReport/clueReport',
    })    
   },
  toBuyMask: function () {
    wx.navigateTo({
      url: '../../pages/buyMask/buyMask',
    })
   },
  onLoad: function () {
  },
})
/*
"pages/buyMask/buyMask",
    "pages/consultation/consultation",
    "pages/personal/selfcheck/detail/detail",
    "pages/personal/selfcheck/selfcheck",
    "pages/personal/clue/clue",
    "pages/index/clueReport/clueReport",
    "pages/index/selfReport/selfReport"
*/