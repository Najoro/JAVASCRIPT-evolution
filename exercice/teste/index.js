const Identiter = {
  nom : "Najoro ",
  prenom : "Fanantenana ",
  age : "22 ans",
  getIdentity : function() {
    // console.log(this.nom + '\n' + this.prenom + '\n' + this.age);
  }
}
tableaux = [1,2,3,4,5,6,7,8];
tableaux.forEach(element => {
  // console.log(element);
});

// console.log(Identiter.getIdentity());

// delete Identiter.nom

for(const key in Identiter){
  // console.log(key);
}
//Obtenir le cles 
let keys = Object.keys(Identiter);
// console.log(keys);

//obtenire le valeur
let value = Object.values(Identiter);
// console.log(value);

//transformer les object en tableaux
let arrayObject = Object.entries(Identiter);
// console.log(arrayObject);

//concatener deux object
const obj2 = {
  taille : "1,60m",
  poids  : "60kg",
  age : 22,
}
let fusion = Object.assign({}, Identiter,obj2)
// console.log(fusion);

//Empecher la modification
const newObject = Object.freeze(Identiter);
// const newObject = Object.seal(Identiter);
newObject.nom = "yes";
// console.log(newObject);

//COSNTRUCTEUR 
//premier methode constructeur
function User(pseudo, ville){
  this.pseudo = pseudo,
  this.ville = ville

  this.getCity = function(){
    console.log(`${this.pseudo} habite a ${this.ville}`);
  }
}
const najoro = new User("Najoro", "67Ha sud");
// console.log(najoro.getCity());

//factorie
function Use(pseudo, ville){
  return(
    pseudo,
    ville
  )
}
const voay  = Use("voay", "anala");
// console.log(voay);

//CLASS
class Utilisateur {
  constructor(pseudo, age){
    this.pseudo = pseudo,
    this.age = age
  }

  Iam = function(){
    console.log("I'm " + this.pseudo);
  }
}
Utilisateur.prototype.say = function() {
  console.log(this.age);
}
const kajy = new Utilisateur("kajy", 22);
const lolo = new Utilisateur("lolo", 22);
// console.log(lolo);

class Animaux{
  constructor(name, sex){
    this.name = name,
    this.sex = sex
  }

  getAnimaux = function(){
    console.log(this.name + " est " + this.sex);
  }

}
const chien = new Animaux('Chien', "mal");
// console.log(chien.getAnimaux());

//a suivre....
