import UserApi from "./UserApi.js";

export default class App {
    /* Modificar el DOM / escuchar eventos*/
    constructor() {
         this.allusers = []

    //   item = document.getElementById('pet-id');
    //   item.addEventListener("change",this.#onIdChange);
  
    //   item = document.getElementById("send-pet");
    //   item.addEventListener("submit", this.#onSendPet);
    }

    async GetUsers() {
        const tabla = document.getElementById('users-table');

        const tbody = tabla.querySelector('tbody');

        this.allusers = await UserApi.getAll();
        
        const filas = this.allusers.map(usuario => {
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

            var boton = document.createElement("button");
            boton.textContent = "Editar";
            boton.type = "submit";
            boton.formMethod ="post";
            boton.id = usuario.id;

            boton.addEventListener("click", this.#onEdit);

            Edit.appendChild(boton)
          
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
  
    #onEdit = async (ev) => {
      ev.preventDefault();
      const id = ev.currentTarget.id;
      console.log(this.allusers);
      console.log(id);
      const user = this.allusers.find(u => u.id === Number(id));

      localStorage.setItem('id',user.id);
      localStorage.setItem('firstName',user.firstName);
      localStorage.setItem('lastName',user.lastName);
      localStorage.setItem('phone',user.phone);
      localStorage.setItem('email',user.email);
      localStorage.setItem('jobTitle',user.jobTitle);
      localStorage.setItem('photo',user.photo);

      window.location.href = `CrearEditarUsuario.html?id=${user.id}`;
    };
  
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