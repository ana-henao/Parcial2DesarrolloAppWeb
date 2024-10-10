import UserApi from "./UserApi.js";

export default class App {
    /* Modificar el DOM / escuchar eventos*/
    constructor() {

    //   let item = document.getElementById("pet-form");
    //   item.addEventListener("submit", this.#onSubmit);
  
    //   item = document.getElementById('pet-id');
    //   item.addEventListener("change",this.#onIdChange);
  
    //   item = document.getElementById("send-pet");
    //   item.addEventListener("submit", this.#onSendPet);
    }

    async GetUsers() {
        const tabla = document.getElementById('users-table');

        const tbody = tabla.querySelector('tbody');

        const allusers = await UserApi.getAll();
        
        const filas = allusers.map(usuario => {
            const fila = document.createElement('tr');
            const FirstName = document.createElement('td');
            const LastName = document.createElement('td');
            const Phone = document.createElement('td');
            const Email = document.createElement('td');
            const JobTitle = document.createElement('td');
            const Photo = document.createElement('td');
            const Edit = document.createElement('td');
          
            FirstName.textContent = usuario.firstName;
            LastName.textContent = usuario.lastName;
            Phone.textContent = usuario.phone;
            Email.textContent = usuario.email;
            JobTitle.textContent = usuario.jobTitle;
            Photo.textContent = usuario.photo;

            const link = document.createElement('a');
            link.textContent = "Editar";
            link.href = "CrearEditarUsuario.html";
            Edit.appendChild(link)
          
            fila.appendChild(Edit);
            fila.appendChild(FirstName);
            fila.appendChild(LastName);
            fila.appendChild(Phone);
            fila.appendChild(Email);
            fila.appendChild(JobTitle);
            fila.appendChild(Photo);
            
            return fila;
          });

        tbody.append(...filas);
      }

    // #onIdChange = (ev)=>{
    //   const item = document.getElementById('pet-id');
    //   const inputValue = ev.currentTarget.value;
    //   console.log("cambió el valor",inputValue);
    //   if(inputValue < 0){
    //       item.className = 'error';
    //   }else if(inputValue == 0){
    //       item.className = 'neutral';
    //   }else{
    //       item.className = 'ok';
    //   }    
    // }
  
    // #onSubmit = async (ev) => {
    //   ev.preventDefault();
    //   const item = document.getElementById('pet-id');
    //   const inputValue = item.value;
    //   let data;
    //   if(inputValue < 0){
    //       data = 'No se pueden traer mascotas con id negativo';
    //   }else if(inputValue == 0){
    //       // console.log("Vamos a consultar las mascotas");
    //       data = JSON.stringify(await Pet.getAll());
    //   }else{
    //       data = await Pet.getOne(inputValue);
    //       console.log(data);
    //       document.querySelector('#pet-id2').value = data.id;
    //       document.querySelector('#pet-name2').value = data.name;
    //       document.querySelector('#pet-type2').value = data.type;
  
    //       data = JSON.stringify(data);
    //   }
    //   this.#printResult(data);
    // };
  
    // #onSendPet = async (ev) => {
    //   ev.preventDefault();
    //   const data = {};
    //   data.id = document.querySelector('#pet-id2').value;
    //   data.name = document.querySelector('#pet-name2').value;
    //   data.tag = document.querySelector('#pet-type2').value;
    //   const respData = await Pet.saveOne(data);
    //   console.log(respData);
    // }
  
    // #printResult = (data) => {
    //   console.log(data);
    //   const result = document.querySelector("#result")
    //   result.textContent = data;
    // };
  }