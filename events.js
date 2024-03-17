// click -> button-a -> fn()
// click -> button-b -> fn()
// click -> button-c -> fn()

const ButtonA = document.querySelector("#button-a");
const ButtonB = document.querySelector("#button-b");
const ButtonC = document.querySelector("#button-c");

//const result = document.querySelector("#result"); // ez a sor csak az akutális clicket írja ki

// lehet előre létrehozott function pl:
function handlButtonAClickEvent() {
  const ts = Date.now();
  //result.innerText = "ButtonA clicked!!!" + ts;
  const line = document.createElement("div");
  line.innerText = "ButtonA clicked!!!" + ts;
  result.append(line);
}

function handleButtonAMouseEnterEvent(){
    const line = document.createElement("div");
    line.innerText = "Mouse ENTER!!!";
    result.append(line); 
}

function handleButtonBClickEvent() {
  const ts = Date.now();
  //result.innerText = "ButtonB clicked" + ts;
  const line = document.createElement("div");
  line.innerText = "ButtonB clicked!!!" + ts;
  result.append(line);
}

function handlButtonCClickEvent() {
  const ts = Date.now();
  //result.innerText = " ButtonC clicked" + ts;
  const line = document.createElement("div");
  line.innerText = "ButtonC clicked!!!" + ts;
  result.append(line);
}

function handleWindowLoadEvent(){
    const ts = Date.now();
    const line = document.createElement("div");
  line.innerText = "Window Loaded!!!" + ts;
  result.append(line);
}

ButtonA.addEventListener("click", handlButtonAClickEvent); // lehet inlinne function () {}, function name () {}, () => {}
ButtonB.addEventListener("click", handleButtonBClickEvent);
ButtonC.addEventListener("click", handlButtonCClickEvent);

ButtonA.addEventListener("mouseenter", handleButtonAMouseEnterEvent);

window.addEventListener("load", handleWindowLoadEvent);
