/********* MENU MOBILE *********/

var botao = document.querySelector('.botaoMenu');
var menuMobile = document.querySelector('#navMobile');

botao.addEventListener('click', function() {
    if(menuMobile.style.display === 'block'){
        menuMobile.style.display = 'none';
        document.querySelector('.menu').src = 'img/menu.png';
    }else{
        menuMobile.style.display = 'block';
        document.querySelector('.menu').src = 'img/menu2.png';
    }
});

window.onresize = function() {
    var larguraTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (larguraTela > 768) {
        menuMobile.style.display = 'none';
        document.querySelector('.menu').src = 'img/menu.png';
    }
};

/********* FIM MENU MOBILE *********/




/********* VALIDAÇÃO DE CAMPOS *********/

function validaFormulario(form){
    
    var invalidoEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; 
    
    var invalidoCelular = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/; 

    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var celular = document.getElementById('celular'); 

    var alertaNome = document.querySelector('.mensagemErroNome'); 
    var alertaEmail = document.querySelector('.mensagemErroEmail');

    alertaNome.style.display = 'none'; 
    alertaEmail.style.display = 'none';

    if(nome.value==""){ 
        alertaNome.innerHTML ="Nome é obrigatório!"; 
        alertaNome.style.display = 'block'; 
        nome.focus(); 
        return false;
    }

    if(email.value==""){
        alertaEmail.innerHTML ="E-mail é obrigatório!"; 
        alertaEmail.style.display = 'block';
        email.focus(); 
        return false;
    }

    if(invalidoEmail.test(email.value)==false){ 
        alert("E-mail inválido!");
        email.focus();
        return false;
    }

    if(invalidoCelular.test(celular.value)==false && celular.value!=""){ 
        alert("Celular inválido!");
        email.focus();
        return false;
    }

    return true;
}

/********* FIM VALIDAÇÃO DE CAMPOS *********/




/********* CARROSSEL *********/

var slideIndex = 1;

showSlides(slideIndex);

showSlidesAutomatic();

function plusSlides(n){
    showSlides(slideIndex += n)
}

function currentSlide(n){
    showSlides(slideIndex = n)
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots =  document.getElementsByClassName("dot");

    if(n > slides.length){ slideIndex = 1 }
    if(n < 1){ slideIndex = slides.length }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";  
    }

    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showSlidesAutomatic() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    var dots =  document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlidesAutomatic, 3000); 
}

/******** FIM CARROSSEL *********/