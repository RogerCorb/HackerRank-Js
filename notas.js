let  array=[100,25,23,50,80,90,100,65,14];

solucao(array);

function solucao(notas) {
	//seu codigo aqui
    
    // let min = Math.min.apply(null, notas); // retorna o valor minimo do vetor   
    // let max = Math.max.apply(null, notas); // retorna o valor maximo do vetor
    let soma = 0;
    let min=notas[0],max=notas[0];
    let cont=0;    
    for ( let note of notas) { 
        soma+=note;        
        if (cont>0) {
            (note<=min) ? min=note : false ; 
            (note>=max) ? max=note : false ; 
        }   
        cont++
    }    
    console.log((soma-min-max)/(notas.length-2));   
}