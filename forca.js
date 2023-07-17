const informacao = "abelha"

solucao("a", informacao);
function solucao(palpite, palavra) {
    // seu codigo aqui
    let cont = 0;
    for (let caractere of palavra) {
        (caractere === palpite) ? cont++ : false;
    }
    console.log(cont);
}