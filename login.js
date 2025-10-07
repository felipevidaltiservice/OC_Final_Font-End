// 1. Espera o HTML ser completamente carregado antes de executar o script.
document.addEventListener('DOMContentLoaded', function() {

    // 2. Encontra o formulário de login no HTML pelo seu ID.
    const loginForm = document.getElementById('login-form');

    // 3. Adiciona um "ouvinte" que espera pelo evento de "submit" (envio) do formulário.
    loginForm.addEventListener('submit', function(event) {
        
        // 4. Impede o comportamento padrão do formulário, que é recarregar a página.
        event.preventDefault();

        // 5. Pega os valores que o usuário digitou nos campos de usuário e senha.
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;
        const errorMessage = document.getElementById('error-message');

        // 6. Define o usuário e a senha corretos (nossos dados "fixos").
        const correctUsername = 'admin';
        const correctPassword = '1234';

        // 7. Verifica se o que foi digitado é igual ao que temos guardado.
        if (usernameInput === correctUsername && passwordInput === correctPassword) {
            // Se for igual, redireciona para a página home.html.
            window.location.href = 'areaCliente.html';
        } else {
            // Se for diferente, mostra uma mensagem de erro.
            errorMessage.textContent = 'Usuário ou senha inválidos!';
        }
    });
});