function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; 
  audio.currentTime = 0; 
  audio.play();
  if (key) {
    key.classList.add('playing');
  }
  
  guardarSecuencia(e.keyCode);
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; 
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

let secuencia = [];
let reproducirBtn = document.getElementById('reproducir-btn');

function guardarSecuencia(codigoTecla) {
  secuencia.push(codigoTecla);
  console.log('Secuencia actual:', secuencia); 
}

function reproducirSecuencia() {
  if (secuencia.length === 0) {
    alert('No hay secuencia grabada. Toca algunas teclas primero.');
    return;
  }
  
  console.log('Reproduciendo secuencia:', secuencia);
  
  secuencia.forEach((codigoTecla, index) => {
    setTimeout(() => {
      const audio = document.querySelector(`audio[data-key="${codigoTecla}"]`);
      const key = document.querySelector(`.key[data-key="${codigoTecla}"]`);
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }
      
      if (key) {
        key.classList.add('playing');
      }
      
    }, index * 500); 
  });
}

function limpiarSecuencia() {
    secuencia = [];
    console.log('Secuencia limpiada');
}

if (reproducirBtn) {
    reproducirBtn.addEventListener('click', reproducirSecuencia);
}

window.addEventListener('keydown', function(e) {
    if (e.key === 'c' || e.key === 'C' || e.keyCode === 67) {
        limpiarSecuencia();
    }
});