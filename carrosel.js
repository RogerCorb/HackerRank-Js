
let string="<<<>>>>";

solucao(string);


function solucao(sequencia) {
	//seu codigo aqui
    let moveright=0,moveleft=0,move=0,indice=0;
    for (let caractere of sequencia) {
        if (indice===0) {
          if (caractere==="<") {
            moveleft=6;
            move=6;
          }
          if (caractere===">") {
            moveright=1;
            move=1;
          }
          indice++
        } else if (indice >=1) {
          if (caractere===">") {
            if (move===6) {
                move=0;
            } else {
                move++;
            }
          } else if (move===0) {
            move=6;
          } else { 
            move--;
          }
        }
    }
    console.log(move);

}
