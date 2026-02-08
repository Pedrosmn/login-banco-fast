# Banco Fast - Interface de Login (Simulação IHC/UX)

## 📄 Descrição do Projeto
Este projeto consiste no desenvolvimento de uma interface de login funcional para um banco fictício, denominado "Banco Fast". O objetivo principal é a aplicação prática de conceitos de **Interação Humano-Computador (IHC)**.

O sistema simula todo o fluxo de autenticação localmente, incluindo validação de máscaras, feedback visual, tratamento de erros e estados de carregamento, sem a necessidade de banco de dados ou conexão com a internet.

---

## 🎯 Análise das Metas de Usabilidade
O projeto foi desenhado para atender rigorosamente às seguintes metas:

- **Fácil de aprender:**
  - Labels claros e placeholders exemplificativos (`00000-0`).
  - Feedback visual imediato (bordas coloridas ao focar) indica qual campo está ativo.

- **Útil:**
  - O sistema realiza validações de formato antes de submeter, impedindo erros básicos.
  - Implementação de funcionalidade "Mostrar Senha" para evitar erros de digitação.

- **Seguro:**
  - A senha é ocultada por padrão.

- **Eficiente:**
  - **Máscaras de Input:** O campo de conta formata automaticamente o hífen enquanto o usuário digita (ex: `12345-6`), reduzindo a carga cognitiva e o número de toques no teclado.
  - Suporte completo à navegação via teclado (`Tab`).

---

## ✨ Análise das Metas de Experiência
Foram selecionadas 5 metas de experiência para guiar o design emocional da interface:

1. **Esteticamente Apreciável:**
   - Uso de imagem de alta qualidade para garantir elegância e contraste com o fundo.

2. **Emocionalmente Adequado:**
   - O design mantém a seriedade necessária para uma transação financeira, gerando confiança, sem ser intimidante.

3. **Satisfatório:**
   - Microinterações polidas (animações suaves de `hover` nos botões e `focus` nos inputs).
   - Feedback de estado de carregamento que confirma que o sistema está processando a requisição.

4. **Compensador:**
   - Mensagens de sucesso claras e verdes ("Bem-vindo de volta") recompensam o usuário após a ação correta.

5. **Agradável:**
   - A combinação de cores sóbrias, tipografia legível e espaçamento generoso cria uma atmosfera visualmente confortável.

---

## 🛠 Tecnologias Utilizadas

- **HTML5:**
- **CSS3:**
- **JavaScript**

---

## 🚀 Instruções de Execução

### 🌐 Acesso Online (GitHub Pages)
Você pode acessar a versão final hospedada diretamente pelo navegador:
🔗 **[https://pedrosmn.github.io/login-banco-fast/](https://pedrosmn.github.io/login-banco-fast/)**

### 💻 Execução Local
Caso queira rodar o projeto em sua máquina:

1. **Clone ou baixe os arquivos:**
   Certifique-se de que os arquivos `index.html`, `style.css` e `script.js` estão na mesma pasta.

2. **Abra o arquivo HTML:**
   Dê um clique duplo em `index.html` para abrir no seu navegador padrão.

3. **Credenciais para Teste (Dados Mockados):**
   - **Conta:** `12345-6`
   - **Senha:** `123456`