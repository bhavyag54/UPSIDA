let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});

let dropdownMenu = document.getElementsByClassName('dropdowns');

console.log(dropdownMenu);

dropdownMenu[1].childNodes[3].style.right = `0px`;
dropdownMenu[2].childNodes[3].style.right = `0px`;

for(let i = 0;i<dropdownMenu.length;i++)
{
    dropdownMenu[i].addEventListener('click', () => {
        console.log(i);
        for(let j = 0;j<dropdownMenu.length;j++)
        {
            if(j !== i)
            {
                dropdownMenu[j].childNodes[3].classList.remove('dropdown-active');
                dropdownMenu[j].childNodes[1].classList.remove('dropdown-active-1');
            }
        }

        dropdownMenu[i].childNodes[3].classList.toggle('dropdown-active');
        dropdownMenu[i].childNodes[1].classList.toggle('dropdown-active-1');
    })
}

window.addEventListener('click',(e) => {
    
    console.log(e.target.classList)
    if(e.target.classList[0] !== 'nav-items' && e.target.classList[0] !== 'nav-links')
    {
        for(let j = 0;j<dropdownMenu.length;j++)
        {
            dropdownMenu[j].childNodes[3].classList.remove('dropdown-active');
            dropdownMenu[j].childNodes[1].classList.remove('dropdown-active-1');
        }
    }
})


document.addEventListener('scroll', () => {
    if(window.scrollY > 40)
    {
        console.log(window.innerWidth)
        if(window.innerWidth >= 1270)
            document.getElementById('navbar').style.position = "fixed";
    }

    if(window.scrollY <= 40)
    {
        document.getElementById('navbar').style.position = "relative";
    }
    
})