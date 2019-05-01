//index.js
const app = getApp()
Page({
  data:{
    //三个导航项的序号
    num:0,
    recList:[
      {
      url:'',
      credits:5,
      cash:0,
      content:'我叫冯焱华，我马上就要生了，没有接生的人怎么办'
      },{
      url:'',
      credits: 2,
      cash: 0.5,
      content:'如何解决计算机网络中TCP协议的分组丢失问题？'
      },{
        url: '',
        credits: 3,
        cash: 0,
        content:'软件学院操作系统教材286页第十题求解'
      },{
        url: '',
        credits: 3,
        cash: 1,
        content: '求问软件学院大二的冯焱华小哥哥有男朋友了吗 '
      },{
        url: '',
        credits: 0,
        cash: 5,
        content:' What is the IP address of gaia.cs.umas'
      },{
        url: '',
        credits: 5,
        cash: 0,
        content:' What is the IP address and TCP port number used by your client computer (source) to transfer the file to gaia.cs.umass.edu?   '
      }, {
        url: '',
        credits: 4,
        cash: 0,
        content: ' What is it in the segment that identifies the segment as a SYN segment? '
      }, {
        url: '',
        credits: 4,
        cash: 0,
        content: ' What is the sequence number of the SYNACK segment sent by gaia.cs.umass.edu to the client computer in reply to the SYN? '
      }, {
        url: '',
        credits: 5,
        cash: 2,
        content: 'What is the sequence number of the TCP segment containing the HTTP POST command? '
      }, {
        url: '',
        credits: 0,
        cash: 100,
        content: 'What are the sequence numbers of the first six segments in the TCP connection (including the segment containing the HTTP POST)? '
      }, {
        url: '',
        credits: 5,
        cash: 0,
        content: '随着软件的普及，由于程序错误所带来的公众风险已经变得越来越重要。请阅读下面的事件描述，并回答问题'
      }, {
        url: '',
        credits: 1,
        cash: 3,
        content: '导致事故发生的原因是什么？'
      }, {
        url: '',
        credits: 5,
        cash: 0,
        content: '在软件开发过程中应该强调什么事项以便更好地防止类似的问题发生？'
      }, {
        url: '',
        credits: 8,
        cash: 0,
        content: ' What is the IP address and TCP port number used by the client computer (source) that is transferring the file to gaia.cs.umass.edu? '
      }
    ]
  },
  //点击某个导航触发的事件
  navigateTo:function(e){
    // console.log(e);
    this.setData({
      num: e.currentTarget.dataset.num
    })
  },
  onShow:function(){
    //还原点击的样式
    this.setData({
      num:0
    })
  }
})
