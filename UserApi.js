class User{
    constructor(id, firstName, lastName, phone, email, photo, jobTitle){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.photo = photo;
        this.jobTitle = jobTitle;
    }
}


export default class UserApi{

 /* Llamados a la API */
    static async getAll(){

        let list = [];
        const resp = await fetch('http://ec2-3-138-183-128.us-east-2.compute.amazonaws.com:4010/users');
        if(resp.status !== 200){
            throw new Error('Hubo error trayendo los usuarios');
        }
        const data = (await resp.json());
        data.forEach(element => {
            list.push(new User(element.id, element.firstName, element.lastName, element.phone, element.email, element.photo, element.jobTitle));
        });
        return list;
    }   

    static async getOne(userId){
        try {
            const resp = await fetch(`http://ec2-3-138-183-128.us-east-2.compute.amazonaws.com:4010/users/${userId}`);   
            const data = await resp.json();
            // console.log('getOne',data);
            return new User(data.id, data.firstName, data.lastName, data.phone, data.email, data.photo, data.jobTitle);
        } catch (error) {
            console.log('hubo error al traer una sola mascota');
        }
    }

    static async saveOne(data){
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const resp = await fetch('http://ec2-3-138-183-128.us-east-2.compute.amazonaws.com:4010/users', options);
        console.log(resp);
        return await resp.json();
    }

}