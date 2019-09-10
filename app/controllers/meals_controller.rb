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
        meal = Meal.create(meal_params)
        render json: meal
    end
    
    def update
        meal.update(meal_params)
        render json: meal
    end

    def destroy
        meal.destroy
    end
    def meal_params
        params.permit(:user_id,:protein,:veg,:carb,:drink)
    end

end
