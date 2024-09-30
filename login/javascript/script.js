// Armazena os usuários registrados
var users = [];

// Função para registrar um usuário
function registerUser(username, password, email) {
  // Verifica se o usuário já existe
  for (var i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      alert("Usuário já existe!");
      return;
    }
  }

  // Cria um novo usuário
  var user = {
    username: username,
    password: password,
    email: email
  };

  // Adiciona o usuário à lista de usuários
  users.push(user);

  alert("Usuário registrado com sucesso!");
}

// Função para fazer login
function loginUser(username, password) {
  // Verifica se o usuário existe
  for (var i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      alert("Login bem-sucedido!");
      return;
    }
  }

  alert("Usuário ou senha incorretos!");
}

//  users é um array que armazena os usuários registrados
// registerUser é uma função que registra um novo usuário. Ela verifica se o usuário já existe, e se não existir, cria um novo usuário e o adiciona à lista de usuários.
// loginUser é uma função que faz login com um usuário existente. Ela verifica se o usuário existe e se a senha está correta. Se o login for bem-sucedido, exibe uma mensagem de sucesso. Se o login falhar, exibe uma mensagem de erro.

// 1. var é uma palavra-chave que declara uma variável.
// users é o nome da variável.
// [] é um array vazio, que é atribuído à variável users. Isso significa que a variável users é um array que armazena os usuários registrados.
// 2. function registerUser(username, password, email) { ... }

// function é uma palavra-chave que declara uma função.
// registerUser é o nome da função.
// (username, password, email) são os parâmetros da função, que são valores que são passados para a função quando ela é chamada.
// { ... } é o corpo da função, que é o código que é executado quando a função é chamada.
// 3. for (var i = 0; i < users.length; i++) { ... }

// for é uma palavra-chave que declara um loop.
// var i = 0 é a inicialização do loop, que define a variável i como 0.
// i < users.length é a condição do loop, que verifica se i é menor que o tamanho do array users.
// i++ é a iteração do loop, que incrementa i em 1 a cada iteração.
// { ... } é o corpo do loop, que é o código que é executado a cada iteração.
// 4. if (users[i].username === username) { ... }

// if é uma palavra-chave que declara uma condição.
// users[i].username === username é a condição, que verifica se o valor de username é igual ao valor de username do usuário atual no array users.
// { ... } é o corpo da condição, que é o código que é executado se a condição for verdadeira.
// 5. alert("Usuário já existe!");

// alert é uma função que exibe uma mensagem de alerta para o usuário.
// "Usuário já existe!" é a mensagem que é exibida.
// 6. var user = { username: username, password: password, email: email };

// var user é a declaração de uma variável user.
// { username: username, password: password, email: email } é um objeto que é atribuído à variável user. Esse objeto tem três propriedades: username, password e email, que são atribuídas com os valores passados como parâmetros para a função registerUser.
// 7. users.push(user);

// users é o array que armazena os usuários registrados.
// push é um método que adiciona um novo elemento ao final do array.
// user é o objeto que é adicionado ao array users.
// 8. alert("Usuário registrado com sucesso!");

// alert é uma função que exibe uma mensagem de alerta para o usuário.
// "Usuário registrado com sucesso!" é a mensagem que é exibida.