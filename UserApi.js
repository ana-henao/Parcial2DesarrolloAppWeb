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
        // const options = {
        //     method: "GET",
        //     headers: {
        //         "content-type": "application/json",
        //         "access-control-allow-origin": "*",
        //     }
        // }
        // const resp = await fetch('https://bbd7-2800-e2-2780-2479-2417-fe6c-d24e-ecb3.ngrok-free.app/users',options);
        // if(resp.status !== 200){
        //     throw new Error('Hubo error trayendo los usuarios');
        // }
        // const data = (await resp.json());

        const data = [
            {
                "firstName": "Jaquelin",
                "lastName": "Kihn",
                "email": "ahmLzx.q@jiol.co",
                "phone": "3151128326",
                "jobTitle": "Mobility",
                "photo": "http://loremflickr.com/640/480/people?82487",
                "id": 8
            },
            {
                "firstName": "Hailie",
                "lastName": "Schiller",
                "id": 4,
                "jobTitle": "Infrastructure",
                "phone": "3126799905",
                "photo": "http://loremflickr.com/640/480/people?42261",
                "email": "F8lh4@hrvhrwu.com"
            },
            {
                "firstName": "Jadon",
                "lastName": "Huel",
                "photo": "http://loremflickr.com/640/480/people?69563",
                "id": 9,
                "email": "DLUUnvrcKDc@yjhcljnbs.com",
                "jobTitle": "Branding",
                "phone": "3146106169"
            }
        ]
        // console.log(data);
        data.forEach(element => {
            list.push(new User(element.id, element.firstName, element.lastName, element.phone, element.email, element.photo, element.jobTitle));
        });
        return list;
    }   

    static async getOne(userId){
        try {
            const resp = await fetch(`https://bbd7-2800-e2-2780-2479-2417-fe6c-d24e-ecb3.ngrok-free.app/users/${userId}`);   
            const data = await resp.json();
            console.log('getOne',data);
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
        const resp = await fetch('https://bbd7-2800-e2-2780-2479-2417-fe6c-d24e-ecb3.ngrok-free.app/users', options);
        console.log(resp);
        return await resp.json();
    }

}