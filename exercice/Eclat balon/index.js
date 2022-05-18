
const ballon = document.getElementById('ballon');
const score = document.getElementById('score');
let nombre = 0
function desBallon(){
     const newballon = document.createElement('span')
     ballon.appendChild(newballon)
     newballon.classList.add('ballon')

     let plusmoin = Math.random() > 0.5 ? 1  : 5
     newballon.style.setProperty("--left", Math.floor(Math.random() * 80 + plusmoin) + "%")

     newballon.addEventListener('click', ()=> {
          nombre++
          score.textContent =nombre ;
          newballon.remove()
     })
     supprimer.addEventListener('click', () => {
         score.textContent = "0"
         nombre *= 0
         newballon.classList.remove('ballon')
     })
}
let loop = () => {
     setTimeout(()=> {
          desBallon();
          loop()
     },2000)
}
// bouton----------------------------------------------
commencer.addEventListener('click',loop)
