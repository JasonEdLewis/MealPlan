
const usersUrl = 'http://localhost:3000/users'
const mealsUrl = 'http://localhost:3000/meals'

const mealChoiceDiv = _query('#meal_choice_div');
const userUl = _query('.users');
const intakeForm = _query('form','#intake_form');
const userName = _query('input','user_name');
const userAge = _query('#user_age')
const userWeight = _query('#user_weight')
const submitBtn = _query('#submit')
const mainMealDiv = _query('#main-meal-div')
const mealsDiv = _query('#meal_choice_div')
const navBtn = _query('nav','button')



intakeForm.addEventListener('submit',(event)=>{
    event.preventDefault();
            // ONCE PERSONAL ENRIES ARE MADE  
    UserAdapter.newUser(userName.value,userAge.value,userWeight.value).then(res => res.json()).then((user)=>{
        Meal.mealChoiceMenu(user.name, user.id)
        // debugger
        event.path[1].remove() // this erases intake_form_div
        _query('nav').remove()
        setUpMealOptions()
        
        }) })
                // 2ND 'PAGE' MEAL OPTIONS
        const setUpMealOptions=()=>{
            const navBtn = _query('nav','button')
            navBtn.addEventListener('click', (e)=>{
                if(e.target.dataset.userId){
                    console.log("Hello User")
                }
                else{
                    console.log("There is no user yet")
                }
            })

            mealItemsForm = _query('#meal-items-form')
            mealItemsForm.addEventListener('submit', (e) =>{
                // debugger
                e.preventDefault();
                item = e.target
                MealAdapter.makeMeal(item.dataset.userId,item.protein.value,item.carb.value,item.veg.value,item.drink.value).then(res => res.json()).then(data =>{
                    debugger
                    // REFACTOR
                    Meal.addChosenItems(data.id,data.protein,data.carb,data.veg,data.drink, data.user.name, data.user.id)
                    // debugger

                    findById("chosenMealItems").remove()
                    activateEditFormAndDeleteBtn()
                    
                })} )}
                // EDIT MEAL FORM
                const activateEditFormAndDeleteBtn =()=> {
                        const form = findById('editMeal')
                        const deleteBtn = findById('deleteMeal')
                        const addMealBtn = findById('add-meal')
                        //edit event
                    form.addEventListener('click', (event)=> {
                        console.log(event.target)
                        // debugger
                        event.preventDefault()
                        MealAdapter.grabOneMeal(event.target.dataset.id).then(res =>  res.json()).then(data =>{
                            debugger
                                console.log(data)
                            Meal.editMealMenu(data.user.name, data.user.id,data.id,data.protein,data.carb, data.veg,data.drink)
                            _query('#choosenMeal').remove()
                            UpdateMeal()
                        })
                
                    })
                    deleteBtn.addEventListener('click',(e)=>{
                        const id = e.target.dataset.id 
                    
                        MealAdapter.deleteMeal(e.target.dataset.id)
                        _query('#choosenMeal').remove()
        nameArr = event.path[1].children[0].firstChild.innerText.split(" ");
        index = nameArr.length;
        username = nameArr[index - 1].toString()
        debugger

                        Meal.mealChoiceMenu(username, event.path[1].dataset.userId)
                            setUpMealOptions()
                        } )
                        addMealBtn.addEventListener('click', (e)=>{
                            const userId = e.path[1].dataset.userId
                            nameArr = e.path[1].children[0].firstChild.innerText.split(" ");
        index = nameArr.length;
        username = nameArr[index - 1].toString();
                            Meal.mealChoiceMenu(username, userId);
                            _query('#choosenMeal').remove()
                            console.log("add a meal")
                        })
                        navBtn.addEventListener('click', (e)=>{
                           console.log( e.target.dataset.userId)
                        })

                }
                const UpdateMeal=()=>{
                    debugger
                    findById('edit-meal-form').addEventListener('submit', (e)=>{
                            e.preventDefault()
                            const mealId = e.target.dataset.mealId;
                            const userId = e.target.dataset.userId;
                            const item = e.target;
                            // debugger
                        // console.log(e)
                        MealAdapter.editMeal(mealId,item.protein.value,item.veg.value,item.carb.value, item.drink.value).then(res => res.json()).then(data =>{ 
                            
                            // START HERE TOMORROW 
                            debugger
                            Meal.addChosenItems(data.id,data.protein,data.carb,data.veg,data.drink, data.user.name, data.user.id)
                            _query('#edited-meal-form').remove()
                            activateEditFormAndDeleteBtn()
                            
                        })

                    })

                   
                }
                