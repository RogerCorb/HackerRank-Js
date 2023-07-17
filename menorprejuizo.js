//const vector = [30, 10,54,76,1,4,35];
const vector = [5,10,3];

solucao(vector);
function solucao(precos) {
    // nesta função vaos percorrer o vetor e extrai dele um preço de compra 
    // e um preço de venda... para que realizar um operação de subtração 
    // e verificar a menor diferença encontrada sendo esta por obrigação
    // ser maior que zero.
    let compra = 0,menorpreju = 0;

    for (let j = 0; j < (precos.length-1); j++) {
        compra = precos[j];                
        (j===0) ? menorpreju=Math.abs(compra-precos[1]) : false ;
        for (let i = (j+1); i < precos.length; i++) {            
            let venda = precos[i];            
            (compra-venda>0 && compra-venda <= menorpreju) ?  menorpreju = compra - venda : false ;           
        }
    }
    console.log(menorpreju);
}
