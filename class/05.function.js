// function auth() {
//   const token = String(Math.floor(Math.random() * 1000000)).padStart(6, 0);
//   document.getElementById('target').innerText = token;
// }

const auth = () => {
  let token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');

  document.getElementById('target').innerText = token;
  document.getElementById('target').style.color = `#${token}`;

  let time = 3;
  setInterval(function () {
    if (time >= 0) {
      let min = Math.floor(time / 60);
      let sec = String(time % 60).padStart(2, '0');
      document.getElementById('setTime').innerText = `${min} : ${sec}`;
      time = time - 1;
    } else {
      document.getElementById('finish').disabled = true;
    }
  }, 1000);
};

//인증번호 전송
//난수 생성
let token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');


//타이머 만들어야함

let time = 180
setInterval(
  function(){
if (time >= 0){
  let min = time /60
}

  }
  ,1000)