class MealsController < ApplicationController
    def index
        meals = Meal.all 
        render json: meals
    end
    def show
        meal = Meal.find_by(id: params[:id])
        render json: meal
    end
    def create
        # byebug
        meal = Meal.create(create_meal_params)
        render json: meal
    end
    
    def update
        meal = Meal.find_by(id: params[:id])
        meal.update(update_meal_params)
        render json: meal
    end

    def destroy
        meal = Meal.find_by(id: params[:id])
        meal.destroy
    end
    def create_meal_params
        params.permit(:user_id,:protein,:veg,:carb,:drink)
    end
    def update_meal_params
        params.permit(:id,:protein,:veg,:carb,:drink )
    end

end
