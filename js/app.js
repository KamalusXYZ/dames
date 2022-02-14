let selectionEnCoursIa = false; // permet de verifier si un pion est selectionner, pour eviter de faire plusieurs action en mm temps
let selectionEnCours = false;


let caseTypeA = [1, 2, 3, 4, 11, 12, 13, 14, 21, 22, 23, 24, 31, 32, 33, 34, 41, 42, 43, 44]
let caseTypeB = [7, 8, 9, 10, 17, 18, 19, 20, 27, 28, 29, 30, 37, 38, 39, 40, 47, 48, 49, 50]
let caseTypeC = [6, 16, 26, 36, 46]
let caseTypeD = [5, 15, 25, 35, 45]

const deSelection = () => {
   
    casenoire = document.querySelectorAll('div.casenoire')
    casenoire.classList.remove("casenoireselectrouge")
    console.log('suppr color' + casenoire)
    console.log('etat de la selection : ' + selectionEnCours)
    let selectionEnCours = false;


}

document.onkeydown = deSelection


selectionPion = (event) => {
   



    /*****VERIFICATION SI LE JETON EST J1 OU IA */
    if (event.target.attributes[0].nodeValue === `img/jetonblanc.svg`) {


        /***VERIFICATION SI LA CASE CLIQUE EST DE TYPE A */
        const even = (element) => element == event.target.parentElement.classList[1];
        verifCaseA = caseTypeA.some(even)
        

        if (verifCaseA === true) {
            /***ACTION SI LA CASE CLIQUE EST DE TYPE A */

            if (selectionEnCoursIa == false) {

                caseSelectionnee = event.target.parentElement.classList[1]

                caseJouableA = parseInt(caseSelectionnee) + 5
                caseJouableB = parseInt(caseSelectionnee) + 6

                caseColoree1 = document.querySelector(`.c${caseJouableA}`)
                caseColoree2 = document.querySelector(`.c${caseJouableB}`)

                verifSiCaseOccuppe1 = caseColoree1.innerHTML
                verifSiCaseOccuppe2 = caseColoree2.innerHTML
                
                if (verifSiCaseOccuppe1 === '<img src="img/jetonblanc.svg">') {

                } else {
                    caseColoree1.classList.add("casenoireselectrouge")

                    selectionEnCoursIa = true
                    
                }

                if (verifSiCaseOccuppe2 === '<img src="img/jetonblanc.svg">') {

                } else {
                    caseColoree2.classList.add("casenoireselectrouge")

                    selectionEnCoursIa = true
                    // const deSelection = () => {
                    //     caseColoree1.classList.remove("casenoireselectrouge")
                    //     caseColoree2.classList.remove("casenoireselectrouge")

                    //     let selectionEnCours = false;

                    // }
                    // document.onclick = deSelection

                }




            }
        } else console.log("la case n'est pas de type A")

        /***VERIFICATION SI LA CASE CLIQUE EST DE TYPE B */
        const even2 = (element) => element == event.target.parentElement.classList[1];
        verifCaseB = caseTypeB.some(even2)
        

        if (verifCaseB === true) {
            /***ACTION SI LA CASE CLIQUE EST DE TYPE B */

            if (selectionEnCoursIa == false) {

                caseSelectionnee = event.target.parentElement.classList[1]

                caseJouableA = parseInt(caseSelectionnee) + 4
                caseJouableB = parseInt(caseSelectionnee) + 5

                caseColoree1 = document.querySelector(`.c${caseJouableA}`)
                caseColoree2 = document.querySelector(`.c${caseJouableB}`)

                verifSiCaseOccuppe1 = caseColoree1.innerHTML
                verifSiCaseOccuppe2 = caseColoree2.innerHTML
                
                if (verifSiCaseOccuppe1 === '<img src="img/jetonblanc.svg">') {

                } else {
                    caseColoree1.classList.add("casenoireselectrouge")

                    selectionEnCoursIa = true
                    // const deSelection = () => {
                    //     caseColoree1.classList.remove("casenoireselectrouge")
                    //     caseColoree2.classList.remove("casenoireselectrouge")
                    //     let selectionEnCours = false;


                    // }
                    // document.onclick = deSelection
                }

                if (verifSiCaseOccuppe2 === '<img src="img/jetonblanc.svg">') {

                } else {
                    caseColoree2.classList.add("casenoireselectrouge")

                    selectionEnCoursIa = true
                    // const deSelection = () => {
                    //     caseColoree1.classList.remove("casenoireselectrouge")
                    //     caseColoree2.classList.remove("casenoireselectrouge")
                    //     let selectionEnCours = false;


                    // }
                    // document.onclick = deSelection

                }


            }
        } else console.log("la case n'est pas de type B")

        /***VERIFICATION SI LA CASE CLIQUE EST DE TYPE C */
        const even3 = (element) => element == event.target.parentElement.classList[1];
        verifCaseC = caseTypeC.some(even3)
        

        if (verifCaseC === true) {
            /***ACTION SI LA CASE CLIQUE EST DE TYPE C */

            if (selectionEnCoursIa == false) {

                caseSelectionnee = event.target.parentElement.classList[1]

                caseJouableA = parseInt(caseSelectionnee) + 5;


                caseColoree1 = document.querySelector(`.c${caseJouableA}`)

                verifSiCaseOccuppe1 = caseColoree1.innerHTML

                
                if (verifSiCaseOccuppe1 === '<img src="img/jetonblanc.svg">') {

                } else {
                    caseColoree1.classList.add("casenoireselectrouge")

                    selectionEnCoursIa = true
                    // const deSelection = () => {
                    //     caseColoree1.classList.remove("casenoireselectrouge")
                    //     caseColoree2.classList.remove("casenoireselectrouge")
                    //     let selectionEnCours = false;

                    // }
                    // document.onclick = deSelection
                }


            }
        } else console.log("la case n'est pas de type C")

        /***VERIFICATION SI LA CASE CLIQUE EST DE TYPE D */
        const even4 = (element) => element == event.target.parentElement.classList[1];
        verifCaseD = caseTypeD.some(even4)
        

        if (verifCaseD === true) {
            /***ACTION SI LA CASE CLIQUE EST DE TYPE D */

            if (selectionEnCoursIa == false) {

                caseSelectionnee = event.target.parentElement.classList[1]

                caseJouableA = parseInt(caseSelectionnee) + 5;


                caseColoree1 = document.querySelector(`.c${caseJouableA}`)
                verifSiCaseOccuppe1 = caseColoree1.innerHTML

               
                if (verifSiCaseOccuppe1 === '<img src="img/jetonblanc.svg">') {

                } else {
                    caseColoree1.classList.add("casenoireselectrouge");
                    selectionEnCoursIa = true
                    // const deSelection = () => {
                    //     caseColoree1.classList.remove("casenoireselectrouge")
                    //     caseColoree2.classList.remove("casenoireselectrouge")
                    //     let selectionEnCours = false;

                    // }
                    // document.onclick = deSelection

                }


            }
        } else console.log("la case n'est pas de type D")

    }
}

document.onclick = selectionPion


const deSelection = () => {
   
        casenoire = document.querySelectorAll('div.casenoire')
        casenoire.classList.remove("casenoireselectrouge")
        console.log('suppr color' + casenoire)
        console.log('etat de la selection : ' + selectionEnCours)
        let selectionEnCours = false;
    

}

document.onkeydown = deSelection