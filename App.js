import UserApi from "./UserApi.js";

export default class App {
    /* Modificar el DOM / escuchar eventos*/
    constructor() {
         this.allusers = []
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

            var borrar = document.createElement("button");
            borrar.textContent = "Borrar";
            borrar.type = "submit";
            borrar.formMethod ="post";
            borrar.id = usuario.id;

            borrar.addEventListener("click", this.#onDelete);

            var div = document.createElement("div");
            div.appendChild(boton)
            div.appendChild(borrar)

            Edit.appendChild(div)
          
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

    #onDelete = async (ev) => {
        ev.preventDefault();
        const id = ev.currentTarget.id;
        console.log(this.allusers);
        console.log(id);
        const user = this.allusers.find(u => u.id === Number(id));

        UserApi.deleteOne(user);
      };
  
  }