const MOON = "moon";
const SUN = "sun";
const Dark_MODE = "dark";
const LINGHT_MODE = "light";
const DEFAULT_MODE = Dark_MODE;

const btm = document.querySelector("#theme-switcher");

init();

function setMode(mode = DEFAULT_MODE) {
  if (mode === Dark_MODE) {
    btm.textContent = SUN;
    document.body.classList.add(Dark_MODE);
  } else if (mode === LINGHT_MODE) {
    btm.textContent = MOON;
    document.body.classList.remove(Dark_MODE);
  }
}
function init() {
  let storeMode = sessionStorage.getItem("mode");
  if (!storeMode) {
    storeMode = DEFAULT_MODE;
    sessionStorage.setItem("mode", DEFAULT_MODE);
  }
  setMode(storeMode);
}
btm.addEventListener("click", function () {
  let mode = sessionStorage.getItem("mode");
  if (mode) {
    let newMode = mode == Dark_MODE ? LINGHT_MODE : Dark_MODE;
    setMode(newMode);
    sessionStorage.setItem("mode", newMode);
  }
});
