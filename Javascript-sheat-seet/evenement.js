/*
     DOCUMENTATION
     go make tking       : documentation Javascript (eng)
     developpeur mzilla  : documentation js  (eng)

*/

const btm1 = document.querySelector(".btm-1")
const btm2 = document.querySelector(".btm-2")
const p = document.querySelector("p")
const fotsy = document.querySelector(".fotsy")
const body = document.querySelector("body")
const div = document.querySelector("div")
const deplace = document.querySelector(".deplace")

btm1.addEventListener("click", () => {
     p.classList.add("reponseJS")
     div.classList.toggle("newJS")
     p.style.backgroundColor = "green"
})
btm2.addEventListener("click", () => {
     p.classList.toggle("reponseJS")
     div.classList.toggle("newJS")
     p.style.backgroundColor = "red"
})

fotsy.addEventListener("click" , () =>{
     body.classList.toggle("bodyJS")
     div.classList.toggle("divJS")
     fotsy.classList.toggle("fotsyJS")
     deplace.classList.toggle("deplaceJS")
})
p.addEventListener("click", () => {
     p.classList.remove("reponseJS")
     div.classList.remove("newJS")
})
//---------------------------------------------------------------
// deplacement sourie << mousemove >>
window.addEventListener("mousemove" , (e) =>{
     deplace.style.left = e.pageX + "px"
     deplace.style.top = e.pageY + "px"

})
window.addEventListener("mousedown" , () => {
     deplace.style.transform = "scale(2) translate(-25% , -25%)"
})

window.addEventListener("mouseup" , () => {
     deplace.style.transform = "scale(1) translate(-50% , -50%)"
})

div.addEventListener('mouseenter' , () => {
     div.style.opacity = "0.6"
})
div.addEventListener('mouseout' , () => {
     div.style.opacity = "1"
})
p.addEventListener("mouseover" , () => {
     p.classList.toggle('p_js')
})
//---------------------------------------------------------------
//keypress
const keypressContante = document.querySelector(".keypress")
const key = document.getElementById('key')

document.addEventListener('keypress', (e) => {
     key.textContent = e.key
     if (e.key == "a" || e.key == "b" || e.key == "c")
          keypressContante.style.backgroundColor = "red"
     else
        keypressContante.style.backgroundColor ="yellow"
})
//---------------------------------------------------------------
//scrool
const menu = document.querySelector('.menu')

document.addEventListener('scroll' , () => {
     if (window.scrollY > 0)
          menu.style.top = 0
     else
          menu.style.top = "-50px"
})
//---------------------------------------------------------------
// formulaire
const inputName= document.querySelector('input[type = "text" ]')
const inputcheckbox= document.querySelector('input[type = "checkbox" ]')
const inputSelect = document.querySelector('#select')
const formulaire = document.querySelector('form')

let nom = "";
let selection = "";

inputName.addEventListener('input' , (e) =>{
   nom = e.target.value;
})

inputSelect.addEventListener('input' , (e) => {
     selection = e.target.value   
})
formulaire.addEventListener('submit', (e) => {
     e.preventDefault() // enlever le comportement par defaut de navigateur
                       //cad changer de page 
     
     if(choix.checked == true){
          document.querySelector('form > div').innerHTML = `
               <h3> nom : ${nom} </h3>
               <h6> langage : ${selection} </h6>
          `
     }
     else{
          alert("bam")
     }
})
//---------------------------------------------------------------
//forEach : pour selectioner plusieux box

boxes = document.querySelectorAll('.box')

boxes.forEach((box) => {

     box.addEventListener("mouseenter" , () => {
     box.style.transform = "scale(0.9)"
     box.style.borderRadius = "20px"
     })
     box.addEventListener("mouseout", () => {
          box.style.transform = "scale(1)"
     })
})

//---------------------------------------------------------------
/*
addEventListener (plus puissant) Vs Oneclick
 on peut le remplacer par onemousemouve

document.body.onclick = () => {
     console.log('console')
}

//---------------------------------------------------------------
*/
// Bubling (de base l'addEventListener est en Bubling cad en false)

document.body.addEventListener('click',()=> {
     console.log('click-1');
}, false)

// UseCapure(true) => passer avant tous les addEventListener

document.body.addEventListener('click',()=> {
     console.log('click-2');
}, true)

//---------------------------------------------------------------
/*methode pour arretrer la propagation  par defaut
     .preventDefault()

document.body.addEventListener('click' , (e)=> {
     alert('stop propagation')
     e.stopPropagation(); // stoper les comportement ds auttre evenement
})

removeEventListener : enlever une evenement 
*/
//---------------------------------------------------------------
// BOM (browser Object Moded) => on utilise surtout de la window

/* 
console.log(window) // documentation window
console.log(window.innerHeight) // hauteur du page
console.log(window.scrollY); // niveaux de scroll sur Y     

*/

// window.open("http//: google.com", "calculator" ,"width = 600", "height = 800" )
/* evenement de windows mais qui n'as pas desoin de windows 
     alert('coucou')
     confirm('oui / non')
     prompt('asxas)
*/
clickEvent = document.querySelector('.click-event')
btm1.addEventListener('click', () => {
     let nom = prompt('votre nom ??')
     clickEvent.innerHTML +=
     `<h3> bravo ${nom}</h3>`
})
btm2.addEventListener('click' , perder);
function perder() {
     confirm("est-ce bien la bonne reponse ?")
}

//compte a rebord d'une fonction a l'execution

setTimeout(() => {
     clickEvent.style.borderRadius = "100px"
}, 10000) //temps de l'execution en mili seconde

let intevalle = setInterval(() => {
     document.body.innerHTML += 
     `
          <div class="box">
               <h2>nouvelle boite</h2>
          </div>
     `
}, 1000) // ajouter une nouvlle boite tous le 1mn d'intervale

document.body.addEventListener('click', (e) => {
 
     clearInterval(intevalle) // aretre le setInterval
     // e.target.remove() // supprimer une balise Html
})

// LOCATION
/*
console.log(location.href); //  lien de votre site
console.log(location.host);  // nom en IP
console.log(location.pathname); // le nom apre le host
console.log(location.search); // le recherche de l'utilisateur
location.replace("href://www.asxas.com") // changer de page

// cganger de page
window.onload = () => {
     location.href = "href://www.google.com"
}
*/

// NAVIGATEUR
console.log(navigator.userAgent); // information sur votre site

// historique
console.log(history) // historique de votre page
// window.history.back(); // revenir en qrrier du page    
// history.go(-2) // revenir 2 fois precedente
