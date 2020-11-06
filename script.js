var know = {
  "hello": "Hi",
  "how are you?": " i am Good",
  "Can I redeem my FB before the original term": " soon updating answer",
  "How do I pay my Credit card bill": " soon updating answer",
  "How can I get my Account Statement": " soon updating answer",
  "What is the tenure of Fixed Deposit": " soon updating answer",

};
var chat = [
  {
    type: 'bot',
    msg: 'Iam Iris, a Virtual Assistance How may I help you ? '
  }
]
chat.push({
  type:'bot',
  msg:"<h4> Frequently  Asked Question </h4> "

})
chat.push({
  type:'bot',
  msg:`Can I redeem my FB before the original term ?<br>
   How do I pay my Credit card bill, soon updating answer? <br> 
   How can I get my Account Statement, soon updating answer ? <br>
  What is the tenure of Fixed Deposit?`

})
function talk() {
  var user = document.getElementById("userBox").value;
  chat.push({
    type: 'user',
    msg: user
  })
  if (user in know) {
    chat.push({
      type: 'bot',
      msg: know[user]
    })
  } else {
    chat.push({
      type: 'bot',
      msg: "I am not a genius , ask me something that I know! above frequently asked question only i can reply."
    })
  }
  renderChat()
}

function renderChat() {
  let chatEle = document.getElementById('my-chat')
  let html = ''
  for (let i in chat) {
    let ch = `
      <div class="message ${chat[i].type}">
        <p> ${chat[i].msg} </p>
      </div>
    `
    html += ch
  }
  chatEle.innerHTML = html
}
