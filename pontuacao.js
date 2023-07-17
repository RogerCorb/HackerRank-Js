const vetor=["V","E","V"]
solucao(vetor);
function solucao(resultados) {
	
    let pontuacao=0;
    for (let caractere of resultados) { 
    
        (caractere==="V") ? pontuacao+=3 : false ;
        (caractere==="E") ? pontuacao+=1 : false ;
    
    }
    console.log(pontuacao); // resposta 7 pontos
}
