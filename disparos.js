const array = [10, 90, 80, 50, 70, 69];

solucao(array);

function solucao(disparos) {
    //seu codigo aqui
    let cont = 0;
    for (let disparo of disparos) {
        (disparo >= 70) ? cont++ : false ;        
    }
    (cont < 3) ? console.log("ELIMINADO") : console.log(cont);
}   
