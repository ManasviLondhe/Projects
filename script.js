// For image slider buttons

let slides = document.querySelectorAll('.slide img');
let Para = document.querySelectorAll('.slide p');

let index = 0;

slides[index].style.display = 'block';
Para[index].style.display = 'block';

function nextSlide() {

    slides[index].style.display = 'none';
    Para[index].style.display = 'none';
    index = index + 1;

    if (index >= slides.length) {
        index = 0;
    } 

    slides[index].style.display = 'block';
    Para[index].style.display = 'block'

}

function prevSlide() {
    
    slides[index].style.display = 'none';
    Para[index].style.display = 'none';
    index = index - 1;

    if (index < 0) {
        index = slides.length - 1;
    }

    slides[index].style.display = 'block';
    Para[index].style.display = 'block'

}

//For toggle Button 

let btnLight = document.querySelector('#light-mode-btn');

let btnDark = document.querySelector('#dark-mode-btn');

let body = document.querySelector('.main-body');

let sideBtns = document.querySelectorAll('button');

let links = document.querySelectorAll('.nav-2 a');

btnLight.addEventListener('click', toggle);
btnDark.addEventListener('click', toggle);

let currentId = btnLight.getAttribute('id');
console.log(currentId);

function toggle() {
    if (currentId === 'light') {

        btnLight.style.display = 'none';
        btnDark.style.display = 'block';
        btnDark.style.color = 'white';
        body.style.backgroundColor = '#222831';
        body.style.color = 'white';
        links.forEach(element => {
            element.style.color = 'white'
        });
        sideBtns.forEach(element => {
            element.style.color = 'white'
            element.style.backgroundColor = '#222831'
        });
        currentId = 'dark';
    } else {
        
        btnDark.style.display = 'none';
        btnLight.style.display = 'block';
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        links.forEach(element => {
            element.style.color = 'black'
        });
        sideBtns.forEach(element => {
            element.style.color = 'black'
            element.style.backgroundColor = 'white'
        });
        currentId = 'light';
    }
}
