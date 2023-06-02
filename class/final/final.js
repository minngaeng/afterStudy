// let phone1 = document.getElementById('phone1').value;
// let phone2 = document.getElementById('phone2').value;
// let phone3 = document.getElementById('phone3').value;

function ph1() {
  let phone1 = document.getElementById('phone1').value;
  if (phone1.length === 3) {
    document.getElementById('phone2').focus();
  }
}

function ph2() {
  let phone2 = document.getElementById('phone2').value;
  if (phone2.length === 4) {
    document.getElementById('phone3').focus();
  }
}

function ph3() {
  let phone3 = document.getElementById('phone3').value;
  if (phone3.length === 4) {
    document.getElementById('sendBtn').style = 'color:#0068FF';
    document.getElementById('sendBtn').removeAttribute('disabled');
  }
}

function sendBtn() {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
  document.getElementById('randomNum').innerText = token;

  let time = 3;
  setInterval(function () {
    if (time >= 0) {
      let min = Math.floor(time / 60);
      let sec = String(time % 60).padStart(2, '0');
      document.getElementById('min').innerText = min;
      document.getElementById('sec').innerText = sec;
      time = time - 1;
    } else {
      document.getElementById('confirm').setAttribute('disabled', 'true');
      document.getElementById('confirm').style = '';

      document.getElementById('min').innerText = 3;
      document.getElementById('sec').innerText = 00;

      document.getElementById('randomNum').innerText = '0000000';
    }
  }, 1000);
  document.getElementById('confirm').removeAttribute('disabled');
  document.getElementById('confirm').style =
    'color:#ffffff; background-color:#0068ff; cursor:pointer';
}

function confirm() {
  alert('인증이 완료되었습니다.');
  document.getElementById('confirm').innerText = '인증 완료';
  document.getElementById('finalBtn').removeAttribute('disabled');
}

const final = () => {
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const pwd = document.getElementById('pwd').value;
  const location = document.getElementById('location').value;
  const man = document.getElementById('man').checked;
  const woman = document.getElementById('woman').checked;

  let isValid = true;
  if (!email.includes('@') || email === '') {
    document.getElementById('errEmail').innerText =
      '이메일을 올바르게 입력했는지 확인해주세요';
    isValid = false;
  } else {
    document.getElementById('errEmail').innerText = '';
  }
  if (name === '') {
    document.getElementById('errName').innerText = '이름을 입력해주세요';
    isValid = false;
  } else {
    document.getElementById('errName').innerText = '';
  }

  if (pwd === '') {
    document.getElementById('errPwd').innerText = '비밀번호를 입력해주세요';
    isValid = false;
  } else {
    document.getElementById('errPwd').innerText = '';
  }

  if (pwd2 === '') {
    document.getElementById('errPwd2').innerText = '비밀번호를 입력해주세요';
    isValid = false;
  } else {
    document.getElementById('errPwd2').innerText = '';
  }

  if (pwd !== pwd2) {
    document.getElementById('errPwd2').innerText =
      '동일한 비밀번호를 입력해주세요';
    isValid = false;
  }

  if (location !== '서울' && location !== '경기' && location !== '인천') {
    document.getElementById('errLocation').innerText = '지역을 선택해 주세요.';
    isValid = false;
  } else {
    document.getElementById('errLocation').innerText = '';
  }

  if (!man.checked && !woman.checked) {
    document.getElementById('errGender').innerText = '성별을 체크해주세요.';
    isValid = false;
  } else {
    document.getElementById('errGender').innerText = '';
  }

  if (isValid === true) {
    alert('가입을 축하드립니다.');
  }
};
