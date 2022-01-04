/*Exo 2 à faire si vous termine l'exo 1:
Calculatrice js
Créer un nouveau fichier html et un nouveau fichier js, qu'on va appeler calculus.html/.js
Créer 2 variables avec un number dedans, peu importe lesquels
Faire un prompt pour récupérer la valeur d'une troisième variable qui contiendra l'opérateur (+, -, *, /)
Faire des conditions en dessous qui vont faire un console log du résultat du calcul selon l'opérateur donné dans le prompt (genre si c'est +, alors ça fera un console log de l'addition des deux numbers).*/


let nm1 = Number(prompt('enter le numer 1'));
let nm2 = Number(prompt('enter le num 2'));
let operateur = prompt('choisis loperateur')
function aditioner()
{ 
    if (nm1 + nm2) {
        console.log(nm1 + nm2)
    }
} 
function multiplication()
{ 
    if (nm1 * nm2) {
        console.log(nm1 * nm2)
    }
} 
function diviser()
{ 
    if (nm1 / nm2) {
        console.log(nm1 / nm2)
    }
} 
function soustraire()
{ 
    if (nm1 - nm2) {
        console.log(nm1 - nm2)
    }
} 

if (operateur == '+') {
    aditioner();
}
else if (operateur == '*') {
    multiplication();
}
else if (operateur == '-') {
    soustraire();
}
else if (operateur == '/') {
    diviser();
}
else {
    console.log('ta pas bien saisie espece de bouffon')
}