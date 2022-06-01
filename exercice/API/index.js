fetch("http://127.0.0.1:5500/texte.txt").then((reponse) => reponse.text());
// .then((data) => console.log(data));
fetch("data.json").then((donne) => donne.json());
// .then((donne) => console.log(donne.user));

let req = new XMLHttpRequest();
// console.log(req);
req.onload = function requile() {
  // console.log(this);
};
req.open("get", "data.json");
// req.send();

fetch("https://pokeapi.co/api/v2/gender/3/.")
  .then((res) => res.json())
  .then((res) => console.log(res.pokemon_species_details[0].pokemon_species.url));
