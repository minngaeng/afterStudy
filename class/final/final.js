let phone1 = document.getElementById('phone1').value;ㅋㅋ
let phone2 = document.getElementById('phone2').value;
let phone3 = document.getElementById('phone3').value;

const ph1 = () => {
  if (phone1.length === 3) {
    document.getElementById('phone2').focus();
  }
};
