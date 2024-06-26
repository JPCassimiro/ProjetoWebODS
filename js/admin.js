let ListaUsuarios = [];
let usernameInput = document.getElementById("nome");
let emailInput = document.getElementById("email");
let senhaInput = document.getElementById("senha");

//Função para Limpar as entradas do formulário
function LimparEntradas() {
  usernameInput.value = "";
  emailInput.value = "";
}

renderListaUsuarios();

//Função para recuperar lista de usuários
function getListaUsuarios() {
  let storedList = JSON.parse(localStorage.getItem("ListaUsuarios"));
  ListaUsuarios = storedList || [];
  return ListaUsuarios;
}

//Função para adicionar novo usuário
function adicionarUsuario(username, email, senha) {
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
  let newUsuario = { username: username, email: email, senha: senha }; //criação de um novo objeto de usuario
  ListaUsuarios.push(newUsuario); //adiciona o novo usuário ao final da lista de pacientes
  localStorage.setItem("ListaUsuarios", JSON.stringify(ListaUsuarios));
  renderListaUsuarios();
}

//Função para renderizar a lista de usuários no HTML
function renderListaUsuarios() {
  let ListaUsuariosElement = document.getElementById("listaCad");
  ListaUsuariosElement.innerHTML = ""; // limpa o conteúdo HTML da lista de usuários
  getListaUsuarios(); //Recupera ListaUsuarios

  ListaUsuarios.forEach(function (usuario) {
    //dados de criação da lista
    const dataEnvio = new Date();
    const dia = dataEnvio.getDate();
    const mes = dataEnvio.getMonth() + 1;
    const ano = dataEnvio.getFullYear();
    let itemLista = document.createElement("li");
    let txtLista = document.createTextNode(
      `Data de Criação: ${dia}/${mes}/${ano} | Nome de Usuário: ${usuario.username} | E-mail: ${usuario.email}`
    );
    itemLista.appendChild(txtLista);

    //caractere 'x' para remoção
    let span = document.createElement("span");
    let txtSpan = document.createTextNode("\u2612"); //caracter x
    span.className = "deleteBtn";
    span.appendChild(txtSpan);
    itemLista.appendChild(span);

    //Evento de clique para remover o usuário
    span.onclick = function () {
      removerUsuario(usuario.username);
    };

    //adicionar o <li> na <ul>
    ListaUsuariosElement.appendChild(itemLista);
  });
}

//função para remover usuário pelo seu username (remoção individual)
function removerUsuario(username) {
  let ListaUsuariosAtualizada = ListaUsuarios.filter(function (usuario) {
    return usuario.username != username; //retorna todos os elementos que não sejam igual ao username passado por parametro
  });

  if (ListaUsuariosAtualizada.length < ListaUsuarios.length) {
    //verifica se a lista atualizada é diferente da lista original
    ListaUsuarios = ListaUsuariosAtualizada;
    localStorage.setItem("ListaUsuarios", JSON.stringify(ListaUsuarios));
    renderListaUsuarios();
  } else {
    alert("Usuario não encontrado.");
  }
}

function delAll() {
  let itemList = document.getElementById("listaCad");
  ListaUsuarios.length = 0;
  itemList.innerHTML = "";
  localStorage.setItem("ListaUsuarios", JSON.stringify(ListaUsuarios));
}

//Evento para adicionar usuario
document.getElementById("admForm").addEventListener("submit", (event) => {
  event.preventDefault();
  adicionarUsuario(usernameInput.value, emailInput.value, senhaInput.value);
  usernameInput.value = "";
  emailInput.value = "";
  senhaInput.value = "";
});

let barraUsername = document.getElementById("barraPesquisaUsername");
let barraEmail = document.getElementById("barraPesquisaEmail");

barraEmail.style.display = "block";
barraUsername.style.display = "none";

function troca() {
  barraEmail.value = "";
  barraUsername.value = "";
  if (barraEmail.style.display == "block") {
    barraEmail.style.display = "none";
    barraUsername.style.display = "block";
  } else if (barraUsername.style.display == "block") {
    barraUsername.style.display = "none";
    barraEmail.style.display = "block";
  }
  renderListaUsuarios();
}

barraUsername.addEventListener("input", () => {
  if (barraUsername.value == "") {
    renderListaUsuarios();
  } else {
    let encontrados = [];
    Object.keys(ListaUsuarios).forEach((keys) => {
      if (barraUsername.value == ListaUsuarios[keys].username) {
        encontrados.push(ListaUsuarios[keys]);
      }
    });
    let ListaUsuariosElement = document.getElementById("listaCad");
    ListaUsuariosElement.innerHTML = ""; // limpa o conteúdo HTML da lista de usuários
    encontrados.forEach(function (usuario) {
      //dados de criação da lista
      const dataEnvio = new Date();
      const dia = dataEnvio.getDate();
      const mes = dataEnvio.getMonth() + 1;
      const ano = dataEnvio.getFullYear();
      let itemLista = document.createElement("li");
      let txtLista = document.createTextNode(
        `Data de Criação: ${dia}/${mes}/${ano} | Nome de Usuário: ${usuario.username} | E-mail: ${usuario.email}`
      );
      itemLista.appendChild(txtLista);

      //caractere 'x' para remoção
      let span = document.createElement("span");
      let txtSpan = document.createTextNode("\u2612"); //caracter x
      span.className = "deleteBtn";
      span.appendChild(txtSpan);
      itemLista.appendChild(span);

      //Evento de clique para remover o usuário
      span.onclick = function () {
        removerUsuario(usuario.username);
      };

      //adicionar o <li> na <ul>
      ListaUsuariosElement.appendChild(itemLista);
    });
  }
});

barraEmail.addEventListener("input", () => {
  if (barraEmail.value == "") {
    renderListaUsuarios();
  } else {
    let encontrados = [];
    Object.keys(ListaUsuarios).forEach((keys) => {
      if (barraEmail.value == ListaUsuarios[keys].email) {
        encontrados.push(ListaUsuarios[keys]);
      }
    });
    let ListaUsuariosElement = document.getElementById("listaCad");
    ListaUsuariosElement.innerHTML = ""; // limpa o conteúdo HTML da lista de usuários
    encontrados.forEach(function (usuario) {
      //dados de criação da lista
      const dataEnvio = new Date();
      const dia = dataEnvio.getDate();
      const mes = dataEnvio.getMonth() + 1;
      const ano = dataEnvio.getFullYear();
      let itemLista = document.createElement("li");
      let txtLista = document.createTextNode(
        `Data de Criação: ${dia}/${mes}/${ano} | Nome de Usuário: ${usuario.username} | E-mail: ${usuario.email}`
      );
      itemLista.appendChild(txtLista);

      //caractere 'x' para remoção
      let span = document.createElement("span");
      let txtSpan = document.createTextNode("\u2612"); //caracter x
      span.className = "deleteBtn";
      span.appendChild(txtSpan);
      itemLista.appendChild(span);

      //Evento de clique para remover o usuário
      span.onclick = function () {
        removerUsuario(usuario.username);
      };

      //adicionar o <li> na <ul>
      ListaUsuariosElement.appendChild(itemLista);
    });
  }
});
