const dropdowns = document.getElementsByClassName('dropdown');
const y = document.body.offsetWidth;

dropdowns[0].childNodes[3].style.left = `-0px`;
dropdowns[1].childNodes[3].style.left = `-50px`;
dropdowns[2].childNodes[3].style.left = `-130px`;

document.addEventListener('scroll', () => {
    if(window.scrollY > 40)
    {
        document.getElementById('navbar').style.position = "fixed";
    }

    if(window.scrollY <= 40)
    {
        document.getElementById('navbar').style.position = "";
    }
    
})




//imp

let impstatus = false;
const impbtn = document.getElementById('impbtn');
const impbar = document.getElementById('impLinks');


const impOpen = () =>{
    impbar.style.transform = 'translateX(0)';
    impstatus = true;
    impbtn.innerText = '←';
    impbtn.style.left = '246px';
    impbtn.style.borderRadius = '50% 0 0 50%';
}


const impClose = () => {
    impbar.style.transform = 'translateX(-100%)';
    impstatus = false;
    impbtn.innerText = '→'
    impbtn.style.left = '300px';
    impbtn.style.borderRadius = '0px 50% 50% 0px';
}

setTimeout(impOpen, 3000);
setTimeout(impClose, 8000);

impbtn.addEventListener('click', () =>{
    if(impstatus)
        impClose();
    else
        impOpen();
})



//imp end

const today = document.getElementById('date');
const tim = document.getElementById('time');

today.innerText = new Date().toDateString();
tim.innerText = new Date().toTimeString().slice(0,9);

setInterval(() => {

    today.innerText = new Date().toDateString();
    tim.innerText = new Date().toTimeString().slice(0,9);

},1000);

// imp ends

// news modal

const newsModalBtn = document.getElementById('news-modal-btn')
const newsclose = document.getElementById('news-modal-close');
const newsmodal = document.getElementById('news-modal');
newsModalBtn.addEventListener('click', () => {
    newsmodal.style.opacity = 1;
    newsmodal.style.visibility = 'visible';
    newsmodal.style.zIndex = 10;
})

newsclose.addEventListener('click', () => {
    newsmodal.style.opacity = 0;
    newsmodal.style.visibility = 'hidden';
    newsmodal.style.zIndex = -10;
})

// news modal ends


// important pdfs modal

const pdfModalBtn = document.getElementById('pdf-modal-btn')
const pdfclose = document.getElementById('pdf-modal-close');
const pdfmodal = document.getElementById('pdf-modal');
pdfModalBtn.addEventListener('click', () => {
    pdfmodal.style.opacity = 1;
    pdfmodal.style.visibility = 'visible';
    pdfmodal.style.zIndex = 10;
})

pdfclose.addEventListener('click', () => {
    pdfmodal.style.opacity = 0;
    pdfmodal.style.visibility = 'hidden';
    pdfmodal.style.zIndex = -10;
})


window.onclick = function(event) {
    if(event.target === pdfmodal)
    {
        pdfmodal.style.opacity = 0;
        pdfmodal.style.visibility = 'hidden';
        pdfmodal.style.zIndex = -10;
    }

    if(event.target === newsmodal)
    {
        newsmodal.style.opacity = 0;
        newsmodal.style.visibility = 'hidden';
        newsmodal.style.zIndex = -10;
    }
 }


// important pdfs modal ends
