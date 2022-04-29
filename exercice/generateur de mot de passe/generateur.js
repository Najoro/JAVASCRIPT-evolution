
// range
const range = document.getElementById('contenue-range');
const rangeValue = document.getElementById('compte-range')

range.addEventListener('input', ()=> {
     rangeValue.value= range.value;
})
//--------------------------------------------------------------------
//text
/*

fonctionnement
---------------
on choisie le nombre de chainne a afficher par le range 
par defaut 4

on choisie parmie les 4 checkbox le text a afficher
si(choix = 0) 
     afficher une text d'erreur
sinon 
     on continue
     
si n click sur "generer mot de passe " on afficher le mot de passe 
et copie automatiquement le text a afficher 


*/
const yourPassword = document.getElementById('mdp-show')
const lowerLetter = "abcdefghijklmnopqrstuvwxyz";
const upperLetter = lowerLetter.toUpperCase();
const numbre= "0123456789";
const symbole = "!@#$%^&*()_+~<>/,.;:'\"\\|";

let selction = function(){
     
}
let generatePassword = function(){
     
     const checks = document.querySelectorAll('label');;
     let data = [];
     let password = "";

     if(lowerCase.checked) data.push(...lowerLetter);
     if(upperCase.checked) data.push(...upperLetter);
     if(numberCase.checked)data.push(...numbre)
     if(symboleCase.checked) data.push(...symbole)

    for(let i = 0 ; i < rangeValue.value ; i++){
          password += data[Math.ceil(Math.random()*data.length - 1)]
    }

    if(data.length == 0){
     checks.forEach((check)=> {
          check.classList.add('view')
     })
     alert('veuiller selectioner au moin une case');
     return;
     }else{
          checks.forEach((check)=> {
               check.classList.remove('view')
          })
     }

     yourPassword.value = password;
     yourPassword.select();

//      mdpConfirm.textContent = "copie !"

//     setTimeout(()=> {
//           mdpConfirm.textContent = "Generer mot de passe"
//     },2000)
}
mdpConfirm.addEventListener('click', generatePassword)