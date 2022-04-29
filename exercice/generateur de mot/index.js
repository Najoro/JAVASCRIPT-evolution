
/*
     cibler l'element a animer
     ajouter les liste de texte a animener
     creer les element une par une{
          creer une nouvelle element
          ajouter autarget
     }
     a chaque intervalle donner les lettre sont apparue
     on crrerra une fonction recursive
*/

const target = document.getElementById('target');
const indication = document.getElementById('name');
const start = document.getElementById('start');
const reset = document.getElementById('reset');

let arrayID = ['Najoro','Fanantenana', '23ans','Mathematique','informatique'];
let arrayName =['nom','prenom', 'age', 'etude','etude']
let mot = 0;
let lettre = 0;
const Name = document.createElement('span');

let Lettre = () => {
     const newLettre = document.createElement('span');

     target.appendChild(newLettre);
     indication.appendChild(Name);
     
     newLettre.textContent = arrayID[mot][lettre];
     Name.textContent = arrayName[mot];

     setTimeout(()=>{
          newLettre.remove();
     },2000)
}
const rec = function(){
     setTimeout(()=>{
          if(mot >= arrayID.length){
               lettre = 0;
               mot = 0;
               rec();
          }else if(lettre <= arrayID[mot].length){
               
               Lettre();
               lettre++;
               rec();
          }else{
               mot++;
               lettre = 0;
               setTimeout(()=> {
                   rec();
               },2000)
        }
     },90)
}

start.addEventListener('click', rec)

