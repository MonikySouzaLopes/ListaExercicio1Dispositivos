let calcular = function(){
    const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const nome = document.getElementById("Nome").value;

    const nomeInverso = nome.split('').reverse('').join('');


    let saídaResultado = document.getElementById("Resultado")
    saídaResultado.innerHTML = nomeInverso

}