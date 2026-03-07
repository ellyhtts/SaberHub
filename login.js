document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o recarregamento da página

            // Captura os valores digitados
            const email = document.getElementById('emailInput').value;
            const password = document.getElementById('passwordInput').value;

            // Define um usuário e senha "mestre" para o teste
            const usuarioCorreto = "admin@saberhub.com";
            const senhaCorreta = "hackathon2026";

            // Simulação de verificação
            if (email === usuarioCorreto && password === senhaCorreta) {
                alert("Login realizado com sucesso! Bem-vindo ao portal de voluntariado.");
                
                // Fecha o modal do Bootstrap antes de sair da página
                const modalElement = document.getElementById('loginModal');
                const modalInstance = bootstrap.Modal.getInstance(modalElement);
                if (modalInstance) {
                    modalInstance.hide();
                }

                window.location.href = "feed.html"; 

            } else {
                alert("E-mail ou senha incorretos. Tente novamente.");
                // Opcional: limpa o campo de senha em caso de erro
                document.getElementById('passwordInput').value = "";
            }
        });
    }
});
