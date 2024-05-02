<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    // Processamento dos dados recebidos (ex: salvar no banco de dados, enviar email)
    echo "Nome: $nome\nEmail: $email\nMensagem: $mensagem"; // Exemplo de exibição

    // Retorno para o JavaScript
    echo json_encode(['status' => 'sucesso']);
} else {
    echo json_encode(['status' => 'erro']);
}
