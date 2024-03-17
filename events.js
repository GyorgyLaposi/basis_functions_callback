// click -> button-a -> fn()
// click -> button-b -> fn()
// click -> button-c -> fn()

const ButtonA = document.querySelector("#button-a");
const ButtonB = document.querySelector("#button-b");
const ButtonC = document.querySelector("#button-c");

const result = document.querySelector("#result");
// lehet előre létrehozott function pl:
function handlButtonAClickEvent() {
  const ts = Date.now();
  result.innerText = "ButtonA clicked!!!" + ts;
}

function handleButtonBClickEvent() {
  const ts = Date.UTC();
  result.innerText = "ButtonB clicked now" + ts;
}

function handlButtonCClickEvent() {
  const ts = Date.now();
  result.innerText = " ButtonC clicked" + ts;
}

ButtonA.addEventListener("click", handlButtonAClickEvent); // lehet inlinne function () {}, function name () {}, () => {}
ButtonB.addEventListener("click", handleButtonBClickEvent);
ButtonC.addEventListener("click", handlButtonCClickEvent);