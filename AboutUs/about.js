const today = document.getElementById('date');
const tim = document.getElementById('time');

today.innerText = new Date().toDateString();
tim.innerText = new Date().toTimeString().slice(0,9);

setInterval(() => {

    today.innerText = new Date().toDateString();
    tim.innerText = new Date().toTimeString().slice(0,9);

},1000);

const dropdowns = document.getElementsByClassName('dropdown');
const y = document.body.offsetWidth;

dropdowns[0].childNodes[3].style.left = `-212px`;
dropdowns[1].childNodes[3].style.left = `-50px`;
dropdowns[2].childNodes[3].style.left = `-130px`;
