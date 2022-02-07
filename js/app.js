let selectionEnCours = false ; // permet de verifier si un pion est selectionner, pour eviter de faire plusieurs action en mm temps




selectionPion = (event) => {


console.log(event)
console.log(event.target.parentElement.classList[1])
caseSelectionnee = event.target.parentElement.classList[1]
caseJouable1 = parseInt(caseSelectionnee) + 5
caseJouable2 = parseInt(caseSelectionnee) + 6


console.log(caseJouable1)
console.log(caseJouable2)



caseColoree1 = document.querySelector(`.c${caseJouable1}`)
caseColoree2 = document.querySelector(`.c${caseJouable2}`)


caseColoree1.style.backGround = "green"

}

document.onclick = selectionPion