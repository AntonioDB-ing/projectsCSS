
// Animación Navbar
document.addEventListener('scroll', function() {
    const navbar = document.getElementById('head');


    if(window.pageYOffset > 0) {
        setTimeout(function() {
            navbar.classList.add('bg-dark');
        }, 100);
        
    } else {
        setTimeout(function() {
            navbar.classList.remove('bg-dark');
        }, 100)
        
    }
});


// Animación scroll
let animado = document.querySelectorAll('.animado');

function scrollWindow() {
    let scrollTop = document.documentElement.scrollTop;
    
    for(let i =  0; i < animado.length; i++ ) {
        
        let alturaAnimado = animado[i].offsetTop;
        
        if(alturaAnimado - 600 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add('mostrar');
        }
    }
};

window.addEventListener('scroll', scrollWindow);

