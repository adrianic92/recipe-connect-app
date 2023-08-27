class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :date]
    
    def show
        render json: @current_user
    end

    def index
        users = User.all.with_attached_image
        render json: users
    end

    def create
        user = User.create!(user_params)
        session[:user_id]
        render json: user, status: :created
    end

    def update
        user = find_user
        user.update(user_update_params)
        render json: user
    end

    def date
        today = Date.today - 6570
        render json: today
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :name, :bio, :date_of_birth, :image)
    end

    def user_update_params
        params.permit(:bio, :image)
    end

    def find_user
        @current_user
    end

end
