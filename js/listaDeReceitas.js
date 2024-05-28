
const updateLista = () => {
    //console.log(listaReceitas.receitas);
    let ul = document.getElementById("ulLista");//pega lista
    Object.keys(listaReceitas.receitas).forEach(key=>{
        console.log(listaReceitas.receitas[key].nome);
        let li = document.createElement("li");
        let a = document.createElement("a");
        let nome = document.createTextNode(listaReceitas.receitas[key].nome);//pega nome da receita
        a.appendChild(nome);
        a.href = `ConteudoReceita.html?key=${key}`;//link com o numero da receita na lista colocado no link
        li.appendChild(a);
        li.className = "liReceita";
        ul.appendChild(li);
    })
}