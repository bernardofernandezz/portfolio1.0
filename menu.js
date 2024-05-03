
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

const form = document.getElementById('contatoForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação básica (opcional)
    if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
        alert('Preencha todos os campos!');
        return;
    }

    // Envia os dados para o servidor
    sendFormData(nome, email, mensagem);
});

function sendFormData(nome, email, mensagem) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://www.php.net/manual/en/tutorial.php'); // Substitua por URL do seu servidor
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Mensagem enviada com sucesso!');
            form.reset(); // Limpa o formulário
        } else {
            alert('Erro ao enviar mensagem!');
        }
    };

    xhr.send(`nome=${nome}&email=${email}&mensagem=${mensagem}`);
}

