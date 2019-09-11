class UserAdapter {
    constructor(){

    }

    static newUser =(name, age, weight)=>{
        return fetch(usersUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                'age': age,
                "weight": weight
            })
        })
    }
    static deleteUser =(id)=>{
        fetch(`http://localhost:3000/users/${id}`,{method: 'DELETE'})
    }
}