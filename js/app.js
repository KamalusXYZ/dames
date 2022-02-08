let selectionEnCours = false ; // permet de verifier si un pion est selectionner, pour eviter de faire plusieurs action en mm temps

let caseTypeA = [1,2,3,4,11,12,13,14,21,22,23,24,31,32,33,34,41,42,43,44]
let caseTypeB = [7,8,9,10,17,18,19,20,27,28,29,30,37,38,39,40,47,48,49,50]
let casetTypC = [6,16,26,36,46]
let caseTypeD = [5,15,25,35,45]

selectionPion = (event) => {




// verifier ici si la case selectionne fait partie du tableau A

caseSelectionnee = event.target.parentElement.classList[1]

caseJouableA = parseInt(caseSelectionnee) + 5
caseJouableB = parseInt(caseSelectionnee) + 6

caseColoree1 = document.querySelector(`.c${caseJouableA}`)
caseColoree2 = document.querySelector(`.c${caseJouableB}`)

caseColoree1.style.opacity = "0.3";
caseColoree2.style.opacity = "0.3";

console.log(caseSelectionnee)
selectionEnCours = true


}

document.onclick = selectionPion


consoleTest = () => {

    console.log(selectionEnCours)
}

document.onclick = consoleTest