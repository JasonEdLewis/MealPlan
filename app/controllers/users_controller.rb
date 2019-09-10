class UsersController < ApplicationController
    def index
        users = User.all 
        render json: users
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user
    end
    def create
        # byebug
        user = User.create(user_params)
        render json: user
    end
    def destroy
        user = User.find_by(id: params[:id])
        byebug
        user.destroy    
    end
    def user_params
        params.permit(:name, :age, :weight)        
    end
end
