import UserApi from "./UserApi.js";
import User from "./User.js";

export default class CrearEditarUsuario {
    /* Modificar el DOM / escuchar eventos*/
    constructor() {
        this.userId = document.getElementById('user-id');
        this.userFirstName = document.getElementById('user-first-name');
        this.userLastName = document.getElementById('user-last-name');
        this.userPhone = document.getElementById('user-phone');
        this.userEmail = document.getElementById('user-email');
        this.userJobTitle = document.getElementById('user-job-title');

        this.photo = localStorage.getItem('photo');

        const item = document.getElementById('send-user');
        item.addEventListener("submit",this.#onSubmit);

    }


    setUser(){
        const firstName = localStorage.getItem('firstName');
        const lastName = localStorage.getItem('lastName');
        const phone = localStorage.getItem('phone');
        const email = localStorage.getItem('email');
        const jobTitle = localStorage.getItem('jobTitle');
        const id = localStorage.getItem('id');

        this.userId.value = id;
        this.userFirstName.value =firstName;
        this.userLastName.value = lastName;
        this.userPhone.value = phone;
        this.userEmail.value = email;
        this.userJobTitle.value = jobTitle;
    }

    #onSubmit = async (ev) => {
        ev.preventDefault();
        const id = this.userId.value;
        const firstName = this.userFirstName.value;
        const lastName = this.userLastName.value;
        const phone = this.userPhone.value;
        const email = this.userEmail.value;
        const jobTitle = this.userJobTitle.value;

        const user = new User(id,firstName,lastName,phone,email,this.photo, jobTitle)

        await UserApi.updateOne(user);  
      };

}