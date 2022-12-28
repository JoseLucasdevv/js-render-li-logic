let list;
let interval;
let acumulador = 0;

const sayMyName = (name) => {
  return (sobrenome) => {
    let getSobrenome = sobrenome;
    let interval = `${name} ${getSobrenome}`;
    return interval;
  };
};

const resultSayMyName = sayMyName("José");

function createUl() {
  const ul = document.createElement("ul");
  const createul = document.body.appendChild(ul);
  return createul;
}

let ul = createUl();
function createLi(text) {
  li = document.createElement("li");
  list = li;
  list.innerHTML = text;
  ul.appendChild(list);
}

function addLiOnPage() {
  setInterval(() => {
    createLi(resultSayMyName("Lucas"));
    addClassName(list);
    acumulador++;
  }, 1000);
}

function addClassName(list) {
  let veriticate =
    acumulador % 2 === 0
      ? list.classList.add("red")
      : list.classList.add("blue");
}
// addLiOnPage();
