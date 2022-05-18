const boxs = document.querySelectorAll(".box");
const progressBarre = document.getElementById("progressBarre");
let pseudo, email, password, confirm;

let checker = function (tag, message, value) {
  const contenaire = document.querySelector(`.${tag}-contenaire`);
  const span = document.querySelector(`.${tag}-contenaire.box > span`);

  if (!value) {
    contenaire.classList.add("error");
    contenaire.classList.remove("great");
    span.textContent = message;
  } else {
    contenaire.classList.remove("error");
    contenaire.classList.add("great");
    span.innerHTML = "&#10004";
  }
};

const pseudoChecker = function (value) {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    checker("pseudo", "le pseudo est entre 3 et 20 caractere", false);
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    checker("pseudo", "pas de caractere speciaux", false);
    pseudo = null;
  } else {
    checker("pseudo", "", true);
    pseudo = value;
  }
};

const emailChecker = function (value) {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    checker("email", "verifier bien votre email");
    email = null;
  } else {
    checker("email", "", true);
    email = value;
  }
};

const passwordChecker = function (value) {
  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    ) &&
    value.length < 6
  ) {
    checker("password", "au minimum 6 caracter");
    progressBarre.classList = "";
    progressBarre.classList.add("progresseRed");
    password = null;
  } else if (value.length > 6 && value.length < 12) {
    checker("password", "", true);
    progressBarre.classList = "";
    progressBarre.classList.add("progresseBlue");
    password = value;
  } else if (value.length >= 12 && value.length < 18) {
    checker("password", "", true);
    progressBarre.classList = "";
    progressBarre.classList.add("progresseViolet");
    password = value;
  } else if (value.length >= 18) {
    checker("password", "", true);
    progressBarre.classList = "";
    progressBarre.classList.add("progresseGreen");
    password = value;
  }
};
const confirmChecker = function (value) {
  if (password !== value) {
    checker("confirm", "le mot de passe ne correspond pas");
    confirm = null;
  } else {
    checker("confirm", "", true);
    confirm = value;
  }
};

boxs.forEach((box) => {
  box.firstElementChild.nextElementSibling.innerHTML += "lalalal";
  box.firstElementChild.nextElementSibling.addEventListener("input", (e) => {
    let value = e.target.value;
    switch (e.target.name) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;

      case "email":
        emailChecker(e.target.value);
        break;

      case "password":
        passwordChecker(e.target.value);
        break;

      case "confirm":
        confirmChecker(value);
        break;

      default:
        console.log("default");
        break;
    }
  });
});
const submit = document.querySelector('input[type="submit"]');
submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (pseudo && email && password && confirm) {
    const data = {
      pseudo: pseudo,
      email: email,
      password: password,
    };
    console.log(data);

    // inputs.forEach((input) => (input.value = ""));
    boxs.forEach((box)=> {
      box.firstElementChild.nextElementSibling.value = ""
      box.lastElementChild.textContent = " "
    })
    progressBarre.classList = "";

    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;
    alert("Inscription validée !");
  }
});
