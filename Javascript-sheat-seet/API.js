//-------------------
//LOCALSTORAGE
//-------------------

window.localStorage.setItem("theme", "dark", "asx");
// console.log(
//   `longeur : ${localStorage.length}
// value   : ${localStorage.getItem('theme')}
// supprimer : ${localStorage.removeItem('theme')}

//   `
// );
// console.log(localStorage);

localStorage.setItem("color", "red");
localStorage.setItem("background", "blue");

let keys = Object.keys(localStorage);
for (const key of keys) {
  // console.log(key + " : " + localStorage.getItem(key));
}

let setings = {
  theme: "dark",
  color: "red",
  background: "blue",
};
localStorage.setItem("setings", JSON.stringify(setings));
const stor = JSON.parse(localStorage.getItem("setings"));
// console.log(stor);
// localStorage.clear();
window.addEventListener('storage', function(e){
  console.log(`le value of the ${e.key} changed fo the ${e.domain}`);
})