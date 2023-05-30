const menuHome = () => {
  document.getElementById('contentFrame').setAttribute('src', 'home.html');
  (document.getElementById('menuHome').style = 'color:black'),
    'background-color: white';
};

const menuJukebox = () => {
  document.getElementById('contentFrame').setAttribute('src', 'jukebox.html');
};

const menuGame = () => {
  document.getElementById('contentFrame').setAttribute('src', 'game.html');
};
