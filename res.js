
let typed = new Typed('.animate', {
    strings: [
        "Developer",
        "Freelancer",
        "Designer"
    ],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true
});


const slide = document.getElementById('slides');

setInterval(()=>{
    slide.classList.add('slide');
    setTimeout(()=>{
        slide.classList.remove('slide');
    },2000)
},8000)

const imgBody = document.querySelectorAll('#disIMg img');

function clickRun(i){
    imgBody.forEach(img => {
        img.classList.remove('show');
    })
    imgBody[i].classList.add('show');
}

const tapDisplay = document.querySelectorAll('.tapDisplay');

tapDisplay.forEach((span, index) => {
    span.addEventListener('click', ()=>{
        document.getElementById('disIMg').style.visibility = "visible";
        clickRun(index);
    })
})

const disIMg = document.getElementById('disIMg');

disIMg.addEventListener('click', ()=> {
    imgBody.forEach(img => {
        img.classList.remove('show');
    })
    disIMg.style.visibility = "hidden";
})

$('.countUp').counterUp({
    delay: 20,
    time: 3000
});