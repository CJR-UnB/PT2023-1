import { auth } from "./auth.js";

var header = () => {
  let state = {
    logged: false,
  };

  let root = document.querySelector(".info");

  let render = () => {
    if (auth.state.user) state.logged = true;

    root.innerHTML = state.logged
      ? `
        <a class="username" href="/perfil/?id=${auth.state.user?.id}"> ${auth.state.user?.username} </a>
        <img src=${auth.state.user?.image} alt="user profile picture">
      `
      : `
        <a href="../cadastro">Cadastre-se</a> 
        <button type="button">
          <a href="../login">Entrar</a>
        </button> 
      `;
  };

  return {
    render,
  };
};

export { header };
