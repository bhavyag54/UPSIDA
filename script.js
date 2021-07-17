const dropdowns = document.getElementsByClassName('dropdown');
const y = document.body.offsetWidth;
console.log(y);

for(let i =0; i < dropdowns.length;i++)
{
    dropdowns[i].addEventListener('click', () => {

        for(let j =0; j < dropdowns.length;j++)
        {
            if(dropdowns[j].childNodes[3].classList[1] === 'show' && j !== i)
            {
                console.log("run");
                dropdowns[j].childNodes[3].click();
            }
        }

        dropdowns[i].childNodes[3].style.left = `-${(document.documentElement.scrollWidth - window.innerWidth)*2}px`;
    })
}


