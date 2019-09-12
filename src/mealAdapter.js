class MealAdapter {
    constructor(){

    }
    static makeMeal = (id,protein,veg,carb,drink)=>{
        return fetch(mealsUrl,{
            method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user_id": id,
            "protein": protein,
            "veg":veg,
            "carb":carb,
            "drink":drink
            }) 
        })
    }
        
        static editMeal =(id,protein,veg,carb,drink)=>{

            return fetch(`${mealsUrl}/${id}`,{
                method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "user_id" : id,
                "protein": protein,
                "veg":veg,
                "carb":carb,
                "drink":drink}) })
        }
        static grabOneMeal=(id)=>{
           return fetch(`${mealsUrl}/${id}`)
        }
        static deleteMeal=(id)=>{
            fetch(`${mealsUrl}/${id}`,{
                method: 'DELETE',
            })
        }

}