
//--------------------------------------------------------------------------------------------
// FILTER-SORT-MAPS
/*
    let data = [
      {
        nom: "Paule",
        age: 22,
        status: true,
      },

      {
        nom: "Jean",
        age: 34,
        status: false,
      },
      {
        nom: "George",
        age: 29,
        status: true,
      },
      {
        nom: "Pierre",
        age: 55,
        status: false,
      },
      {
        nom: "Gegale",
        age: 26,
        status: true,
      }
    ];

    let array = [1, 2, 3, 44, 56, 43, 11, -1, -2, -4, -90, -6];
    let filtre = array.filter((numbre) => numbre > 0);
    let sort = array.sort((a, b) => a - b);
    let filterCroissante = array
      .filter((nombre) => nombre > 0)
      .sort((a, b) => b - a);

    let filterDecroissante = array
      .filter((nombre) => nombre < 0)
      .sort((a, b) => b - a);
    // console.log(filtre);
    // console.log(sort);
    // console.log(filterCroissante);
    // console.log(filterDecroissante);

    // let fittre = array
    //   .filter((nombre) => nombre > 0 )
    //   .sort((a, b) => a - b)
    //   .map((nombre) => console.log(nombre));

    let trieUsers = function (description,bool) {
      document.body.innerHTML +=
        `<h1> ${description}</h1>` +
        data
          .sort((a, b) => a.age - b.age)
          .filter((user) => user.status === bool)
          .map(
            (user) => `
      <div class="user">
            <h2>${user.nom} </h2>
            <p> age : ${user.age} ans</p>
            <p> status : ${user.status ? "Moderateur" : "Membre"}</p>
      </div>
      `
          )
          .join("");
    };

    trieUsers("moderateur", true);
    trieUsers("Membre", false);


    let date = new Date();
    let timestamp = Date.parse(date)

    function formaDate(date){
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
              year : "numeric",
              month : "long",
              day : "numeric"
        })
        return newDate;
    }
    console.log(formaDate(date));
    console.log(formaDate(timestamp));

*/
//--------------------------------------------------------------------------------------------

// REGEX
/*
    .test : test si une regex est present dans une chaine
    .match : renvoie une tableaux du regex trouver dans une chaine
    
    /g : selectiner tous le regex;
    /i : le regex n'est pas sensible a la casse
    /m : on peut selectioner une ligne
*/

let message = `hi01, I'm Najoro, 03Hi. 
Najoro , 04hI , yes HI`;

let reg = /hi/gi;

// let matcher = [];
// let match;

// do{
//   match = reg.exec(message);
//   if(match){
//     matcher.push(match);
//   }
// }while(match != null)

// console.log(matcher);

let resultat = message.match(/hi/gi);
let number = /\w/gi;

// console.log(resultat);
// console.log(message.match(number));
let numero = "0343105882";
let correct = /\d/gi;


// console.log(numero.match(number).join('-'));
// console.log(/^[0-1]\d:\d\d$/.test("06:19"));

// console.log(message.match(/\bnajoro\b/gmsi));
//--------------------------------------------------------------------------------------------

