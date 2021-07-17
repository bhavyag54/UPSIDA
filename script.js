const dropdowns = document.getElementsByClassName('dropdown');
const y = document.body.offsetWidth;

dropdowns[0].childNodes[3].style.left = `-212px`;
dropdowns[1].childNodes[3].style.left = `-50px`;
dropdowns[2].childNodes[3].style.left = `-70px`;

for(let i = 0; i<3;i++)
{
    dropdowns[i].childNodes[1].addEventListener('click',() => dropdowns[i].scrollIntoView(true))
}

