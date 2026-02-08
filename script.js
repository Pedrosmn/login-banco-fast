
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const accountInput = document.getElementById('account');
    const passInput = document.getElementById('password');
    const togglePassBtn = document.getElementById('togglePassword');
    const feedbackArea = document.getElementById('feedbackArea');
    const submitBtn = document.getElementById('submitBtn');
    const btnLoader = document.getElementById('btnLoader');
    const btnText = document.getElementById('btnText');

    accountInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 6) value = value.slice(0, 6);
        if (value.length > 5) {
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
        }
        e.target.value = value;
    });

    togglePassBtn.addEventListener('click', () => {
        const type = passInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passInput.setAttribute('type', type);
        togglePassBtn.textContent = type === 'password' ? '👁️' : '🔒';
    });

    function showFeedback(message, isError = true) {
        feedbackArea.style.display = 'block';
        feedbackArea.className = `feedback-msg ${isError ? 'feedback-error' : 'feedback-success'}`;
        feedbackArea.textContent = message;
        
        if (isError) {
            const container = document.querySelector('.container');
            container.style.transform = 'translateX(5px)';
            setTimeout(() => container.style.transform = 'translateX(-5px)', 50);
            setTimeout(() => container.style.transform = 'translateX(5px)', 100);
            setTimeout(() => container.style.transform = 'translateX(0)', 150);
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        feedbackArea.style.display = 'none';

        const account = accountInput.value;
        const password = passInput.value;

        if (!account || account.length < 6) {
            showFeedback('Por favor, insira um número de conta válido (ex: 12345-6).');
            accountInput.focus();
            return;
        }

        if (!password) {
            showFeedback('Por favor, insira sua senha.');
            passInput.focus();
            return;
        }

        submitBtn.disabled = true;
        btnLoader.style.display = 'inline-block';
        btnText.textContent = 'Verificando...';
        submitBtn.style.opacity = '0.7';

        setTimeout(() => {
            const MOCK_ACCOUNT = "12345-6";
            const MOCK_PASS = "123456";

            submitBtn.disabled = false;
            btnLoader.style.display = 'none';
            btnText.textContent = 'Acessar Conta';
            submitBtn.style.opacity = '1';

            if (account === MOCK_ACCOUNT && password === MOCK_PASS) {
                showFeedback(`Olá! Login realizado com sucesso. Bem-vindo ao Banco Fast.`, false);
                form.reset();
            } else {
                showFeedback('Dados incorretos. Tente Conta: 12345-6 e Senha: 123456');
            }
        }, 1500);
    });
});
