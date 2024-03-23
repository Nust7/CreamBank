function enviarFormulario() {
  console.log("aqui")
  // Obtém os dados do formulário
  const formulario = document.getElementById("form-cadastrar");
  const dadosFormulario = new FormData(formulario);

  console.log("Formulario:" + formulario)
  console.log("dadosFormulario:" + dadosFormulario)

  dadosFormulario.append("ativo", true);
  dadosFormulario.append("saldo", 1000);
  
  // Converte os dados do formulário para um objeto JSON
  const objetoJSON = {};
  dadosFormulario.forEach(function(valor, chave){
    objetoJSON[chave] = valor;
  });

  // Envia o objeto JSON para a API (substitua a URL pela sua API)
  fetch('http://localhost:8080/cliente/cadastrar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Configura o tipo de mídia como JSON
    },
    body: JSON.stringify(objetoJSON) // Converte o objeto JSON para uma string JSON
  })
  .then(function(response) {
    if (response.ok) {
      alert('Formulário enviado com sucesso!');
      // Faça qualquer outra ação necessária após o envio do formulário
    } else {
      alert('Erro ao enviar o formulário. Por favor, tente novamente.');
    }
  })
  .catch(function(error) {
    console.error('Erro durante a solicitação:', error);
    alert('Erro durante o envio do formulário. Por favor, tente novamente mais tarde.');
  });
}
