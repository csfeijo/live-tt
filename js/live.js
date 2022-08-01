document.getElementById('enviar').onclick = () => {
  const email = document.getElementById('email').value;
  
  if(email.value !== '') {

    const form  = document.getElementById('contato');
    const mensagem =  document.getElementById('mensagem');

    form.style.display = 'none';

    mensagem.innerHTML = `${email} - cadastrado com sucesso!`;
    mensagem.style.display = 'block';
  }
}
