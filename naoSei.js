const btEnvio = document.getElementById('btEnvio');
const novoElemento = document.getElementById('novoElemento');

    

function addNovoElemento(){
   const informacoes = document.createElement('p');
    informacoes.textContent = 'AQUI!!!!';
    novoElemento.appendChild(informacoes);      
}

btEnvio.addEventListener('click', addNovoElemento);

