//index.js
const app = getApp()
Page({
  data:{
    num: 0,                //三个导航项的序号
    number: 3, //显示在推荐帖区域中的，每种帖子的数目
    academic_recList:[],  //用于记录学术帖
    life_recList:[],      //用于记录生活帖
  },
  //点击某个导航触发的事件
  navigateTo:function(e){
    // console.log(e);
    this.setData({
      num: e.currentTarget.dataset.num
    })
  },

  onShow:function(){

    //云开发初始化
    wx.cloud.init({
      env: 'cqu-se-06class-f9b488', //确认云环境ID
      traceUser: true,
    })
    const db = wx.cloud.database()

    //-------------------------------------------拉取学术帖部分内容
    db.collection('AcademicPosts').where({
     done:false         //筛选条件为仍未结帖的帖子
    }).get({
      success: res => {
        this.setData({
       //   num:0,
          academic_recList:res.data,  //将查询结果的所有信息都扔给academic_recList
        })
        console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      },
    });

    //--------------------------------------------拉取生活帖部分内容
    db.collection('LifePosts').where({
      done: false                //查询条件为仍未结帖的生活帖
    }).get({
      success: res => {
        this.setData({
         // num: 0,
          life_recList: res.data,      //将查询结果的所有信息都扔给academic_recList
        })
        console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      },
    });

    //还原点击的样式
    this.setData({
      num: 0
    });

  }
})
