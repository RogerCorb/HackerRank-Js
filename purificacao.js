
const stringCorrompida=


function solucao(stringCorrompida) {
	
    let frase=""
    for (let letter of stringCorrompida){
        if (letter === "!" || letter === "@" || letter ==="#" || letter ==="$" || letter ==="%" 
            || letter==="&" || letter === "*" || letter === "(" || letter ===")") {
            
        } else { 
            frase+=letter;
        }        
    }
    console.log(frase);    
}