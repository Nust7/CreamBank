function enviarFormulario() {
    // Obtém os dados do formulário
    var formulario = document.getElementById("meuFormulario");
    var dadosFormulario = new FormData(formulario);
  
    // Converte os dados do formulário para um objeto JSON
    var objetoJSON = {};
    dadosFormulario.forEach(function(valor, chave){
      objetoJSON[chave] = valor;
    });
  
    // Envia o objeto JSON para a API (substitua a URL pela sua API)
    fetch('sua_api.com/recurso', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(objetoJSON)
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
  