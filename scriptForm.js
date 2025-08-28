var btEnviar = document.querySelector("#btEnvio");


btEnviar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#meuForm");

    console.log(form.nome.value);
    console.log(form.idade.value);
    console.log(form.filmePref.value);
    console.log(form.jogoPref.value);

    var informacoes = document.createElement('p');
    informacoes.textContent = form.nome.value + ''+form.idade.value+' '+form.filmePref.value+' '+form.jogoPref.value;
    
    var novoElemento = document.getElementById('novoElemento');
    novoElemento.appendChild(informacoes);

    let texto = "Esta é a primeira linha.\nEsta é a segunda linha.";
    console.log(texto);
   
});