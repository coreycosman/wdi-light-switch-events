var clickBait = document.querySelector('.switch');
clickBait.addEventListener('click', function(){
  // window.alert('#switch-on was clicked');
  if (clickBait.className === 'switch on') {
    clickBait.className = 'switch off'
    var body = document.querySelector("body");
    body.className = ("dark")
    var message = document.querySelector(".status")
    message.innerText = "Hey, who turned the light off?!"
  }
  else {
    clickBait.className = 'switch on'
    var body = document.querySelector("body");
    body.className = ("light")
    var message = document.querySelector(".status")
    message.innerText = "It's so bright in here!"
  }
});
