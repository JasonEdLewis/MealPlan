
const usersUrl = 'http://localhost:3000/users'
const mealssUrl = 'http://localhost:3000/meals'

const main = document.querySelector('#main');
const userUl = document.querySelector('.users');
const intakeForm = document.querySelector('form','#intake_form');
const userName = document.querySelector('input','user_name');
const userAge = document.querySelector('#user_age')
const userWeight = document.querySelector('#user_weight')
const submitBtn = document.querySelector('#submit')

intakeForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    newUser(userName.value,userAge.value,userWeight.value).then(res => res.json()).then((user)=>{
        return user.name
    }).then(name => mealChoiceMenu(name)).then(event.target.remove())

})

const newUser =(name, age, weight)=>{
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
const mealChoiceMenu =(name)=>{
    return  main.innerHTML += `<div id="meal_choice_div">
    <h1>${name}, please choose you meal!</h1>
    
</div>`

}