// Armazena os usuários registrados
let users = [];

// Função para registrar um usuário
function registerUser(username, password, email) {
    // Verifica se o usuário já existe
    if (users.find(user => user.username === username)) {
        document.getElementById("register-error").innerHTML = "Usuário já existe!";
        return;
    }

    // Cria um novo usuário
    let user = {
        username,
        password,
        email
    };

    // Adiciona o usuário à lista de usuários
    users.push(user);

    // Limpa os campos do formulário
    document.getElementById("register-form").reset();

    // Exibe uma mensagem de sucesso
    document.getElementById("register-error").innerHTML = "Usuário registrado com sucesso!";
}

// Função para fazer login
function loginUser(username, password) {
    // Verifica se o usuário existe
    let user = users.find(user => user.username === username && user.password === password);
}
