let tarjetas = document.querySelectorAll('.panel');

function abrir() {
   this.classList.toggle('abrir');
}

for (let i = 0; i < tarjetas.length; i++) {
   tarjetas[i].addEventListener('click', abrir);
}

