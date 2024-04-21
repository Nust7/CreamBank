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
    dadosFormulario.forEach(function (valor, chave) {
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
        .then(function (response) {
            if (response.ok) {
                alert('Formulário enviado com sucesso!');
                // Faça qualquer outra ação necessária após o envio do formulário
            } else {
                alert('Erro ao enviar o formulário. Por favor, tente novamente.');
            }
        })
        .catch(function (error) {
            console.error('Erro durante a solicitação:', error);
            alert('Erro durante o envio do formulário. Por favor, tente novamente mais tarde.');
        });
}


function transferir() {
    const transferencia = document.getElementById("formulario-transferencia");
    const dadosTransferencia = new FormData(transferencia);

    let dadosCliente = JSON.parse(localStorage.getItem("dadosCliente"));
    console.log("Local storage " + localStorage.getItem("dadosCliente"))
    numeroConta = dadosCliente.numeroConta;

    dadosTransferencia.append("contaRemetente", numeroConta);

    const objetoJSON = {};
    dadosTransferencia.forEach(function (valor, chave) {
        objetoJSON[chave] = valor;
    });
    fetch('http://localhost:8080/transacoes/enviarDinheiro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Configura o tipo de mídia como JSON
        },
        body: JSON.stringify(objetoJSON) // Converte o objeto JSON para uma string JSON
    })
        .then(function (response) {
            if (response.ok) {
                alert('Transferência enviado com sucesso!');
                //var saldoAPI = response.body
                response.json().then(function (data) {
                    const saldo = data;
                    // Atualiza o saldo na tela
                    document.getElementById('saldoCliente').textContent = saldo.toString();
                });
            } else {
                alert('Erro ao enviar o Transferência. Por favor, tente novamente.');
            }
        })
        .catch(function (error) {
            console.error('Erro durante a solicitação:', error);
            alert('Erro durante o envio da Transferência. Por favor, tente novamente mais tarde.');
        });
}

async function bloquearConta() {
    var senhaValidacao = document.getElementById('senha').value;
    let dadosCliente = JSON.parse(localStorage.getItem("dadosCliente"));

    const objetoJSON = {
        numeroConta: dadosCliente.numeroConta,
        senha: senhaValidacao
    };

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objetoJSON)
    }
    const url = 'http://localhost:8080/cliente/desativar';
    const response = await fetch(url, config)
    const resposta = await response.text();

    alert(resposta)


}

async function buscarCartao() {
    let dadosCliente = JSON.parse(localStorage.getItem("dadosCliente"));
    const conta = dadosCliente.numeroConta;


    var url = 'http://localhost:8080/cartao/buscar?numeroConta=' + conta;
    const response = await fetch(url)
    console.log(response)

    if (response.ok) {
        const data = await response.json();
        alert(JSON.stringify(data)); // Exibindo os dados retornados pela requisição
    } else {
        alert('Erro ao buscar o cartão'); // Tratamento de erro caso a requisição falhe
    }
}