document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('emailInput').value;
            const password = document.getElementById('passwordInput').value;

            const usuarioCorreto = "admin@saberhub.com";
            const senhaCorreta = "hackathon2026";

            if (email === usuarioCorreto && password === senhaCorreta) {
                alert("Login realizado com sucesso! Bem-vindo ao SaberHub.");
                
                const modalElement = document.getElementById('loginModal');
                
                let modalInstance = bootstrap.Modal.getInstance(modalElement);
                if (!modalInstance) {
                    modalInstance = new bootstrap.Modal(modalElement);
                }
                
                modalInstance.hide();
                console.log("Usuário autenticado:", email);
                
            } else {
                alert("E-mail ou senha incorretos. Tente novamente.");
                document.getElementById('passwordInput').value = "";
            }
        });
    }
});
