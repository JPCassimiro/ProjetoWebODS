//Função para recuperar lista de usuários
let ListaUsuarios = [];
console.log(JSON.parse(localStorage.getItem("ListaUsuarios")));

function getListaUsuarios() {
    let storedList = JSON.parse(localStorage.getItem("ListaUsuarios"));
    ListaUsuarios = storedList || [];
    return ListaUsuarios;
}

let form = document.getElementById("form");

form.addEventListener("submit",(event)=>{
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");
    getListaUsuarios();
    if(ListaUsuarios.find(p => p.email==email.value && p.senha==senha.value)){
        location.href = "./Homepage.html";
    }else{
        alert("Usuario ou senha errados!");
    }
});