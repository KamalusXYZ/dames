airDeJeu = document.querySelector('.airdejeu')
const genererCaseBlanche = () => {
    div1 = document.createElement('div');
    div1.className = 'caseblanche'
    airDeJeu.appendChild(div1);
}
const genererCaseNoire = () => {
    div2 = document.createElement('div');
    div2.className = 'casenoire'
    airDeJeu.appendChild(div2);
}



const generatrice = () => {

  

    for (i = 0; i < 50; ++i) {

        genererCaseBlanche()
        genererCaseNoire()  


    }

}
generatrice()