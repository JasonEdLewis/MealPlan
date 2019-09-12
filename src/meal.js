class Meal{
    constructor(){

    }

    
    static mealChoiceMenu =(name,id)=>{
        return  mainMealDiv.innerHTML += `
        <div id="chosenMealItems">
        <nav><button data-user-id="${id}">Stay Healthy ${name}</button></nav>
        <h1>Choose you Protein, Veggies & Starch</h1><br>
        <H3>SELECT YOUR PROTEIN</H3> 
        <p>
            It's easy to understand the excitement. Protein is an important component of every cell in the body. Hair and nails are mostly made of protein. Your body uses protein to build and repair tissues. You also use protein to make enzymes, hormones, and other body chemicals. Protein is an important building block of bones, muscles, cartilage, skin, and blood.</p><br>
    
            <form id="meal-items-form" data-user-id="${id}">
                <input list="protein" name="protein"> 
                <datalist id="protein">
                    <option value="Chicken Breast"> 
                    <option value="Lean Beef">
                    <option value="Salmon">
                    <option value="Tuna">
                    <option value="pork">
                    <option value="eggs">
                    <option value="Tofu">
                    <option value="Turkey Breast">
                </datalist>
                    <br> <br>
        <H3>SELECT A STARCH</H3><br>
        <p>Carbs blurbCarbohydrates are all about energy and are found in foods like fruits, vegetables, breads, pasta, and dairy products. Your body uses these foods to make glucose, which is your body's main energy source. ... "Carbohydrates provide the body with the energy it needs and are a good source of many vitamins and minerals.</p><br>
         <input list="carb" name="carb"> 
                <datalist id="carb">
                    <option value="Potato">
                    <option value="Rice">
                    <option value="Pasta">
                    <option value="Quinoa">
                    <option value="Sweet potato">
                </datalist>
                        <br><br>
            <H3>SELECT YOUR VEGETABLE</H3> <br>
            <p>veggie Eating vegetables provides health benefits – people who eat more vegetables and fruits as part of an overall healthy diet are likely to have a reduced risk of some chronic diseases. Vegetables provide nutrients vital for health and maintenance of your body.</p>
                <input list="veg" name="veg"> 
                <datalist id="veg">
                    <option value="Kale">
                    <option value="Broccoli">
                    <option value="Green-beans">
                    <option value="Asparagus">
                    <option value="Carrots">
                    <option value="Microgreens">
                    <option value="Swiss Chard">
                    <option value="Collard Greens">
                    <option value="Spinach">
                </datalist><br><br>

                <H3>SELECT YOUR DRINK</H3> <br>
                <p>veggie Eating vegetables provides health benefits – people who eat more vegetables and fruits as part of an overall healthy diet are likely to have a reduced risk of some chronic diseases. Vegetables provide nutrients vital for health and maintenance of your body.</p>
                <input list="drink" name="drink"> 
                <datalist id="drink">
                    <option value="Water">
                    <option value="Fruit Juice">
                    <option value="Soda">
                    <option value="Seltzer">
                    <option value="Red wine">
                    <option value="White wine">
                    <option value="kombucha">
                    <option value="Lite beer">
                    <option value="Beer">

                </datalist><br><br>
        <input type="submit">
        </form>
        <br><br><br><br><br><br>
    </div>`}

    static addChosenItems =(id,protein,carb,veg, drink,username,user_id)=>{
        
        return  mainMealDiv.innerHTML += `
        <div id='choosenMeal' data-meal-id="${id}" data-user-id="${user_id}">
        <nav><button${user_id}>Stay Healthy ${username}</button></nav>
        <p>Here are the meal options you have chosen</p>
        <ul>
        <li protein-id="${id}">${protein}</li>
        <li carb-id ="${id}">${carb}</li>
        <li veg-id ="${id}">${veg}</li>
        <li drink-id ="${id}">${drink}</li>
        </ul>
        <button id="editMeal" data-id="${id}">Edit Your meal</button>
        <button id="deleteMeal" data-id="${id}">Delete meal</button>
        <button id="add-meal" data-id="${id}">Add meal</button>
        <button id="home-page" data-id="${id}" href="/index.html">Home</button>
        </div>`

    }
    static editMealMenu =(username, user_id,id, protein,veg,carb,drink)=>{
        // EDIT MENU AFTER MEAL WAS PESSEMISTICALLY RENDERED //
        debugger
        return mainMealDiv.innerHTML += 
        ` <div id="edited-meal-form">
        <nav><button data-user-id="${user_id}">Stay Healthy ${username}</button></nav>
            <p>
            <h3>Edit your Meal here...</h3>
            </p>
            <br>
    <form id="edit-meal-form" data-user-id="${user_id}" data-meal-id="${id}">

        <p>Your current Protein is ${protein}</p>

        <input list="protein" name="protein"> 
        <datalist id="protein">
                <option value="Chicken Breast"> 
                <option value="Lean Beef">
                <option value="Salmon">
                <option value="Tuna">
                <option value="pork">
                <option value="eggs">
                <option value="Baked Chicken"> 
                <option value="Tofu">
                <option value="Turkey Breast">
        </datalist>

        <p>Your current starch is ${carb}</p>
        <input list="carb" name="carb"> 
            <datalist id="carb">
                <option value="potato">
                <option value="rice">
                <option value="pasta">
                <option value="Quinoa">
                <option value="Sweet potato">
            </datalist>

            <p>Your current vegetable is ${veg}</p>
            <input list="veg" name="veg"> 

            <datalist id="veg">
                <option value="kale">
                <option value="broccoli">
                <option value="green-beans">
                <option value="asparagus">
                <option value="carrots">
                <option value="Microgreens">
                <option value="Swiss Chard">
                <option value="Collard Greens">
                <option value="Spinach">
            </datalist>

            <p>Your current beverage is ${drink}</p>
            <input list="drink" name="drink"> 

            <datalist id="drink">
                <option value="Water">
                <option value="Fruit Juice">
                <option value="Soda">
                <option value="Seltzer">
                <option value="Red wine">
                <option value="White wine">
                <option value="kombucha">
                <option value="Lite beer">
                <option value="Beer">
            </datalist>
                    <br><br>
            <input type="submit" text="update">
        </form>
    </div>`
    }
}




// ` <div id="edited-meal-form">
//         <nav><button data-user-id="${user_id}>Stay Healthy ${username}</button></nav>
//             <p>
//             <h3>Edit your Meal here...</h3>
//             </p>
//             <br>
//     <form id="edit-meal-form" data-user-id="${user_id}" data-meal-id="${id}">

//         <p>Your current Protein is ${protein}</p>

//         <input list="protein" name="protein"> 
//         <datalist id="protein">
//                 <option value="Chicken Breast"> 
//                 <option value="Lean Beef">
//                 <option value="Salmon">
//                 <option value="Tuna">
//                 <option value="pork">
//                 <option value="eggs">
//                 <option value="Baked Chicken"> 
//                 <option value="Tofu">
//                 <option value="Turkey Breast">
//         </datalist>

//         <p>Your current starch is ${carb}</p>
//         <input list="carb" name="carb"> 
//             <datalist id="carb">
//                 <option value="potato">
//                 <option value="rice">
//                 <option value="pasta">
//                 <option value="Quinoa">
//                 <option value="Sweet potato">
//             </datalist>

//             <p>Your current vegetable is ${veg}</p>
//             <input list="veg" name="veg"> 

//             <datalist id="veg">
//                 <option value="kale">
//                 <option value="broccoli">
//                 <option value="green-beans">
//                 <option value="asparagus">
//                 <option value="carrots">
//                 <option value="Microgreens">
//                 <option value="Swiss Chard">
//                 <option value="Collard Greens">
//                 <option value="Spinach">
//             </datalist>

//             <p>Your current beverage is ${drink}</p>
//             <input list="drink" name="drink"> 

//             <datalist id="drink">
//                 <option value="Water">
//                 <option value="Fruit Juice">
//                 <option value="Soda">
//                 <option value="Seltzer">
//                 <option value="Red wine">
//                 <option value="White wine">
//                 <option value="kombucha">
//                 <option value="Lite beer">
//                 <option value="Beer">
//             </datalist>
//                     <br><br>
//             <input type="submit" text="update">
//         </form>
//     </div>`