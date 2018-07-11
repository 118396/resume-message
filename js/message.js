var APP_ID = 'Ne1RJ5Dtcxs7SCfTbLJj9KOH-gzGzoHsz';
var APP_KEY = 'kDVSo8HhSCsPof8zfw508r2T';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

var query = new AV.Query('Message');
  query.find()
  .then(function (messages) {
    let array = messages.map((item)=> item.attributes)
    array.forEach((item) => {
      let li = document.createElement('li') //创建元素
      li.innerText = `${item.name}: ${item.content}`//用户输入的东西
      let messageList = document.querySelector('#messageList')
      messageList.append(li)//插到页面里
    })
  }
)


let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit', function(e){
    e.preventDefault()//阻止刷新页面
    let content = myForm.querySelector('input[name=content]').value//找到名字叫 content 的 input
    let name = myForm.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
      'name': name,
      'content': content
    }).then(function (object) {
      let li = document.createElement('li') 
      li.innerText = `${object.attributes.name}: ${object.attributes.content}`
      let messageList = document.querySelector('#messageList')
      messageList.append(li)
      myForm.querySelector('input[name=content]').value=''//让 input 的 value 等于空字符串
     // window.location.reload() //自动刷新
    })
})
// 为什么监听 submit 而不是 button 
// 因为需要监听 submit 和 回车两个事件

 // 不用 for 循坏
 // 用 forEach 和 map

 


/*
// 创建 TestObject 表
var x = AV.Object.extend('wh2');
//在表中创建一行数据
var o = new x();
// 数据内容是 words：'Hello World!'
// 如果保存成功，则运行 alert
o.save({
  words: 'Hi'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
*/