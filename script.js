console.log('hello!!!');

const btnArr = document.getElementsByClassName('detail');
for (let i = 0; i < btnArr.length; i++) {
  btnArr[i].addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.exp' + (i + 1)).scrollIntoView(true);
  });
}

const navArr = document.getElementsByClassName('headeritem');
for (let i = 0; i < navArr.length; i++) {
  navArr[i].addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.main_text' + i).scrollIntoView(true);
  });
}

const detail_id = 'exp';

function getShow(id) {
  document.getElementById(detail_id + id).style.display = '';
}

function getHide(id) {
  document.getElementById(detail_id + id).style.display = 'none';
}
