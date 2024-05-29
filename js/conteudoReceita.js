console.log(listaReceitas)
function getParameterByName(name, url) {//encontra receita baseado no url
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let receitaAtual = getParameterByName('key');//key da receita baseado na lista

const updateConteudoReceita = () => {
    //let fig = document.getElementById("figureReceita");
    let h = document.getElementById("hReceita");//pega os elementos a serem modificados
    let ul = document.getElementById("ulIngradientes");
    let p = document.getElementById("pPreparo");
    let img = document.getElementById("imagemConteudo");
    img.src = listaReceitas.receitas[receitaAtual].linkImg;
    img.alt = listaReceitas.receitas[receitaAtual].nome;
    let titulo = document.createTextNode(listaReceitas.receitas[receitaAtual].nome);
    h.appendChild(titulo);
    let preparo = document.createTextNode(listaReceitas.receitas[receitaAtual].preparo);
    p.appendChild(preparo);
    Object.keys(listaReceitas.receitas[receitaAtual].ingredientes).forEach(key=>{//percorre o array de reicetas dentro do objeto
        //console.log(listaReceitas.receitas[receitaAtual].ingredientes[key]);
        let li = document.createElement("li");
        let ingrediente = document.createTextNode(listaReceitas.receitas[receitaAtual].ingredientes[key]);
        li.appendChild(ingrediente);
        ul.appendChild(li);
    });
}