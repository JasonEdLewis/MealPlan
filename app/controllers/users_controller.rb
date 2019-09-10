class UsersController < ApplicationController
    def index
        users = User.all 
        render json: users
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user, only:[:id,:name,:weight]
    end
    def create
        # byebug
        user = User.new(user_params)
        if user
            user.save
        render json: user
        else
            byebug
         flash[:errors] = user.errors.full_messages
        end
        
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
