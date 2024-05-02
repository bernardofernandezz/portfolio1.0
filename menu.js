
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


const formulario = document.getElementById('formulario-mensagem');
const campoMensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function(e) {
  e.preventDefault(); // Evita o envio padrão do formulário

  const mensagem = campoMensagem.value;

  // Envie a mensagem para o destino desejado (exemplo):
  // - Email: use ajax ou fetch para enviar por email
  // - Servidor: use ajax ou fetch para enviar para um servidor
  // - Console: apenas para teste (exemplo abaixo)
  console.log('Mensagem enviada:', mensagem);
});