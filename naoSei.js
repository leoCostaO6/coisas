const btEnvio = document.getElementById('btEnvio');
const novoElemento = document.getElementById('novoElemento');

 var nome = document.getElementById('nome').ariaValueText;
 var idade = document.getElementById('idade').valu;
 var filmePref = document.getElementById('filmePref');
 var jogoPref = document.getElementById('jogoPref');
    

function addNovoElemento(){
   const informacoes = document.createElement('p');
    informacoes.textContent = 'AQUI!!!!';
    novoElemento.appendChild(informacoes);      
}

btEnvio.addEventListener('click', addNovoElemento);

