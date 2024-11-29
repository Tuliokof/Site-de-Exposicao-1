// Dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Alterna o modo escuro
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Atualiza o texto do botão conforme o modo ativo
    const isDarkMode = document.body.classList.contains("dark-mode");
    document.getElementById("dark-mode-toggle").innerText = isDarkMode ? "Claro" : "Escuro";
});



// Validação do formulário
document.getElementById('formulario')?.addEventListener('submit', function (event) {
    const mensagem = document.getElementById('mensagem').value;
    if (mensagem.length < 10) {
        alert('Mensagem deve ter pelo menos 10 caracteres.');
        event.preventDefault();
    }
});

// Animação de hover em cards (exemplo extra)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});


const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmaton = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkInputNome();
})

function checkInputNome(){
    const nomeValue = nome.value;

    console.log(nomeValue)

    if(nomeValue ==="")
        errorInput(nome, "Preencha o nome!")
        // mostrar o aviso e mostrar a mensagem de erro...
}

function erroInput(input, message){
    const fomrItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}
