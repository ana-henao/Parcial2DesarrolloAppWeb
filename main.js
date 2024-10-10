import App from './App.js'
import CrearEditarUsuario from './crearEdiarUsuario.js';

const app = ()=> new App();
app();

if(window.location.pathname === "/index.html"){
    app().GetUsers();
}

if(window.location.pathname === "/CrearEditarUsuario.html"){

    console.log()
    const crearEditarUsuario = new CrearEditarUsuario();

    if(window.location.search.includes("id"))
            crearEditarUsuario.setUser();
}

// import UserApi from "./UserApi.js";

// const allPets = await UserApi.getAll();
// console.log(allPets);

// const pet = await UserApi.getOne(4);
// console.log(pet);