const updateLista = () => {
    function getParameterByName(name, url) {//encontra receita baseado no url
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    let paginaAtual = getParameterByName('pagina');    
    if(paginaAtual === "receitas"){
        updateReceitas();
    }else if(paginaAtual === "plantio"){
        updatePlantio();
    }
}

const updateReceitas = () => {
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

const updatePlantio = () => {
    let ul = document.getElementById("ulLista");//pega lista
    Object.keys(listaPlantio.plantio).forEach(key=>{
        console.log(listaPlantio.plantio[key].nome);
        let li = document.createElement("li");
        let a = document.createElement("a");
        let nome = document.createTextNode(listaPlantio.plantio[key].nome);//pega nome da receita
        a.appendChild(nome);
        a.href = `ConteudoPlantio.html?key=${key}`;//link com o numero da receita na lista colocado no link
        li.appendChild(a);
        li.className = "liPlantio";
        ul.appendChild(li);
    })
}

