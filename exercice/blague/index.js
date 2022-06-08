// api : https://api.blablagues.net/?rub=blagues

const categorie = document.getElementById("categorie");
const subject = document.getElementById("subject");
const response = document.getElementById("response");
const responseBtm = document.querySelector(".response-btm");
let preced = [];

let fetchManager = async function () {
  await fetch("https://api.blablagues.net/?rub=blagues")
    .then((result) => result.json())
    .then((result) => {
      console.log(result.data.content);
      preced.push(result.data);
      categorie.textContent = result.data.categorie;
      subject.textContent = result.data.content.text_head;

      response.textContent = result.data.content.text_hidden
      ? result.data.content.text_hidden
      : result.data.content.text;
      if(result.data.content.text_hidden !== ""){
        responseBtm.classList.remove("response-btm");
        response.classList.add('response-hidden')
      }
    });
};
next.addEventListener("click", fetchManager);
prec.addEventListener("click", fetchManager);
responseBtm.addEventListener('click', ()=> {
  responseBtm.classList.add("response-btm");
  response.classList.remove('response-hidden')
})