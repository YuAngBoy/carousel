window.onload = function () {
  let backbtn = document.getElementsByClassName('backTop')[0];
  let timer = null; // 定义定时器
  // 刷新页面判断火箭是否显示
  isshow();
  // 窗口滚动判断火箭是否显示
  window.onscroll = function () {
    isshow();
  }
  // 判断火箭现实与否
  function isshow() {
    if (( document.documentElement.scrollTop || document.body.scrollTop ) > document.documentElement.clientHeight ){
      backbtn.style.display = 'block';//如果滚条的高度大于窗口的高度，按钮就会显示出来，否则按钮消失
    } else {
      backbtn.style.display = 'none';
    }
  }
  // 当鼠标移动到返回顶部按钮时，增加类fly
  backbtn.onmouseover = function () {
    this.classList.add('fly');
  }
  // 当鼠标移出的时候，删除类fly
  backbtn.onmouseout = function () {
    this.classList.remove('fly');
  }
  // 当点击小火箭，返货顶部，并且火箭上升
  backbtn.onclick = function () {
    timer = setInterval(() => {
      let ostop = document.documentElement.scrollTop || document.body.scrollTop;
      let ospeed = Math.ceil(ostop / 8);//先获取一个速度
      document.documentElement.scrollTop = document.body.scrollTop = ostop-ospeed;//由快到慢的速度
      backbtn.style.transform = 'translateY(-1000px)';
      if ( ostop === 0 ){
        clearInterval(timer);
        backbtn.style.transform = 'translateY(0)';
      }
    },30);
  }
  }
