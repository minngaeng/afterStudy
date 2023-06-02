let phone1 = document.getElementById('phone1').value;
function ph1() {
  if (phone1.length === 3) {
    document.getElementById('phone2').focus();
  }
}
