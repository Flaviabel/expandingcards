let tarjetas = document.querySelectorAll('.panel');
let h3= document.querySelectorAll('h3')

for (let i = 0; i < tarjetas.length; i++) {  
   tarjetas[i].addEventListener('click', function abrir(){
      removeclass();
      tarjetas[i].classList.add('abrir');
      h3[i].classList.add('block');

   });
   function removeclass(){
      for (let i = 0; i < tarjetas.length; i++) {
         tarjetas[i].classList.remove('abrir');
         h3[i].classList.remove('block');
      }
}
}


