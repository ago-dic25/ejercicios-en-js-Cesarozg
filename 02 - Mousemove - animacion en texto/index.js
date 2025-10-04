let texto = document.querySelector('h1');
let hero = document.querySelector('.hero');
let maximo = 100;
document.addEventListener('mousemove', function(e){
    //let x = e.offsetX;
    //let y = e.offsetY;

    let {offsetX: x, offsetY: y} = e;
    let {offsetWidth: width, offsetHeight: height} = hero;

    let moverX = Math.round((x / width * maximo) - (maximo / 2));
    let moverY = Math.round((y / height * maximo) - (maximo / 2));

    texto.style.textShadow = `${moverX}px ${moverY}px 10px rgba(255, 0, 0, 1)`;
}); 