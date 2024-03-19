const apiKey = "http://localhost:8080/cliente/buscarTodos";

const res = await fetch(apiKey);
const data = await res.json()
console.log(data)

function enviarFormulario() {
  // Obtém os dados do formulário
  var formulario = document.getElementById("form-cadastrar");
  var dadosFormulario = new FormData(formulario);

  dadosFormulario.append("ativo", true);
  dadosFormulario.append("saldo", 1000);
  
  // Converte os dados do formulário para um objeto JSON
  var objetoJSON = {};
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
