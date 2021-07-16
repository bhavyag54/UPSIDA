const navLinks = document.getElementsByClassName('nav-link');

console.log(navLinks)

const changeActive = (event) => { 

    for(let i = 0;i<navLinks.length;i++)
    {
        if(navLinks[i].classList[1] === 'active')
        {
            navLinks[i].classList.remove('active');
        }
    }

    if(event.target.classList.length === 1)
        event.target.classList.add('active');

}

for(let i = 0;i<navLinks.length;i++)
{
    navLinks[i].addEventListener('click', changeActive);
}




