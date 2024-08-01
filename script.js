const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
const answer = document.querySelectorAll('.answer');

// plus.addEventListener('')

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener('click', () => {
    plus[i].classList.toggle('active-state');
    minus[i].classList.toggle('active-state');
    answer[i].classList.toggle('active-state');
  });
  minus[i].addEventListener('click', () => {
    plus[i].classList.toggle('active-state');
    minus[i].classList.toggle('active-state');
    answer[i].classList.toggle('active-state');
  });
}
