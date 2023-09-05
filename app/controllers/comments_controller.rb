class CommentsController < ApplicationController
    def index
        comments = Comment.all
        render json: comments
    end

    def create
        comment = Recipe.find_by(id: params[:recipe_id]).comments.create!(comment_params)
        render json: comment, status: :created
    end

    private

    def comment_params
        params.permit(:description, :user_id)
    end
end
