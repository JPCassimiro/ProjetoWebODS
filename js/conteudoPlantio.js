
function getParameterByName(name, url) {//encontra receita baseado no url
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let plantioAtual = getParameterByName('key');//key do plantio baseado na lista

const updateConteudoPlantio = () => {
    let h = document.getElementById("hPlantio");//pega os elementos a serem modificados
    let ul1 = document.getElementById("ulPlantioPag1");
    let ul2 = document.getElementById("ulPlantioPag2");
    let p = document.getElementById("pPlantio");
    let img = document.getElementById("imagemConteudo");
    let a = document.getElementById("aPlantio");
    img.src = listaPlantio.plantio[plantioAtual].linkImg;
    img.alt = listaPlantio.plantio[plantioAtual].nome;
    let titulo = document.createTextNode(listaPlantio.plantio[plantioAtual].nome);
    h.appendChild(titulo);
    let descricao = document.createTextNode(listaPlantio.plantio[plantioAtual].descricao);
    p.appendChild(descricao);
    a.src = listaPlantio.plantio[plantioAtual].fonte;
    Object.keys(listaPlantio.plantio[plantioAtual].instrucoes).forEach(key=>{//percorre o array de intruções dentro do objeto
        let li = document.createElement("li");
        let instrucao = document.createTextNode(listaPlantio.plantio[plantioAtual].instrucoes[key]);
        li.appendChild(instrucao);
        ul2.appendChild(li);
    });
}