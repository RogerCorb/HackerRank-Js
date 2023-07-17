const vector=[ "aveia","irmão","manhã","abacate"];
let primeiraLetra="a";
let segundaLetra="b";

solucao("a","b",vector); // chamei a função criada abaixo

function solucao(primeiraLetra, segundaLetra, palavras) {
	//seu codigo aqui
    let encontrouPalavra = false;
    let letra1="",letra2="";
    for (let palavra of palavras ) {
          
          for (let i=0; i<1 ; i++) {   
            
            letra1=palavra.charAt(0); // charAt(0) pega a primeira letra da palavra            
            letra2=palavra.charAt(1); // charAt(1) pega a segunda letra da palavra                   
          }        
        
        if (letra1 == primeiraLetra && letra2==segundaLetra) {
              console.log(palavra);
              encontrouPalavra=true;
        }        
    }
    if (!encontrouPalavra) { 
            console.log("NENHUMA");
    }
}