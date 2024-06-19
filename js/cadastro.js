//Função para recuperar lista de usuários
let ListaUsuarios = [];


function getListaUsuarios() {
    let storedList = JSON.parse(localStorage.getItem("ListaUsuarios"));
    ListaUsuarios = storedList || [];
    return ListaUsuarios;
}

//Função para adicionar novo usuário
function adicionarUsuario(username,email,idade,estado,senha) {
    getListaUsuarios();
    for (let usuario of ListaUsuarios) {
        if (username == usuario.username) {
            alert("Já existe um usuário com este nome!");
            return; //interrompe a execução da funcão
        } else if (email == usuario.email) {
            alert("Já existe um usuário com este E-mail!");
            return;
        }
    }
    console.log("Passei aqui");

    //caso passe das verificações, adiciona-se um novo usuário
    let newUsuario = { username: username, email: email, idade: idade, estado: estado, senha: senha }; //criação de um novo objeto de usuario
    ListaUsuarios.push(newUsuario); //adiciona o novo usuário ao final da lista de pacientes
    localStorage.setItem("ListaUsuarios", JSON.stringify(ListaUsuarios));
}


form.addEventListener("submit",(event)=>{
    console.log('teste');
    event.preventDefault();
    let cadastrar = document.getElementById("form");
    let username = document.getElementById("nome");
    let email = document.getElementById("email");
    let idade = document.getElementById("idade");
    let estado = document.getElementById("estado");
    let senha = document.getElementById("senha");
    adicionarUsuario(username.value,email.value,idade.value,estado.value,senha.value);
    username.value,email.value,idade.value,estado.value,senha.value = "";
    location.href = "./Login.html"
});

