const bntEnviar = document.getElementById('bnt-enviar');
const caixaTexto = document.querySelectorAll('.input-text');
const span = document.querySelectorAll('.campo-obrigatorio');


bntEnviar.addEventListener('click', (e) => {
    e.preventDefault()
     caixaTexto.forEach(function (input, indice)  {     
         if (input.value === "") {
             input.classList.remove("campo-preenchido");
             input.classList.add("n-preenchido");
             span[indice].classList.add("erro");
         } else {
             input.classList.add("campo-preenchido");
             input.classList.remove("n-preenchido");
             span[indice].classList.remove("erro");
         }
     })   
 })               