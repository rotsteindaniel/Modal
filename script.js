// pegar os botoes

// adicionar o event listener clique no abrir janela com o objetivo de retirar a class hide

const btn = document.querySelector("#btn");

const openmodal = () => {
  esc.classList.remove("hide");
};

const closemodal = () => {
  esc.classList.add("hide");
};

const e = (e) => {
  if (e.keyCode === 27) {
    return closemodal();
  }
};

btn.addEventListener("click", openmodal);

window.addEventListener("keydown", e);
