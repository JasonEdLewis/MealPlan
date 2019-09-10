class MealsController < ApplicationController
    def index
        meals = Meal.all 
        render json: meals
    end
    def create
        byebug
        meal = Meal.create(meal_params)
        render json: meal
    end
    def meal_params
        params.permit(:user_id,:protein,:veg,:carb,:drink)
    end

end
