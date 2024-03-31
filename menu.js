let btnMenu = document.getElementById('btn_menu');
let menu = document.getElementById('menu_mobile');
let overlay = document.getElementById('overlay-menu');
let SobreMim = document.getElementById('Sobre-Mim');
let Projetos = document.getElementById('Projetos');
let Tecnologias = document.getElementById('Tecnologias');
let Contato = document.getElementById('Contato');
let FaleComigo = document.getElementById('Fale-Comigo');
let SobreMimMobile = document.querySelector('#SobreMimMobile');
let TecnologiasMobile = document.querySelector('#TecnologiasMobile');
let ProjetosMobile = document.querySelector('#ProjetosMobile');
let ContatoMobile = document.querySelector('#ContatoMobile');



//SESSÃO DE ABRIR E FECHAR O MENU RESPONSIVO:
btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu');
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu');
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu');
});

//BTN MENU DESKTOP INDO PARA AS SESSÕES:
SobreMim.addEventListener('click', ()=> {

    SobreMim.scrollIntoView({behavior: 'smooth'});

});

Projetos.addEventListener('click', () => {

    document.querySelector('.portifolio').scrollIntoView({behavior: 'smooth'});

});

Tecnologias.addEventListener('click', () => {
    
    document.querySelector('.especialidades').scrollIntoView({behavior: 'smooth'});
});

Contato.addEventListener('click', () => {

    document.querySelector('.txt-sobre').scrollIntoView({behavior: 'smooth'});
});

FaleComigo.addEventListener('click', () =>{

    document.querySelector('.formulario').scrollIntoView({behavior: 'smooth'});
});

//BTN MENU MOBILE INDO PARA AS SESSÕES:

SobreMimMobile.addEventListener('click', () => {

    document.querySelector('.txt-topo-site').scrollIntoView({behavior: 'smooth'});
});

ProjetosMobile.addEventListener('click', () => {
    document.querySelector('.portifolio').scrollIntoView({behavior: 'smooth'});
});

TecnologiasMobile.addEventListener('click', () => {
    document.querySelector('.especialidades').scrollIntoView({behavior: 'smooth'});
});

ContatoMobile.addEventListener('click', () => {
    document.querySelector('.txt-sobre').scrollIntoView({behavior: 'smooth'});

});

