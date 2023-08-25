class TagsController < ApplicationController
    def create
        tag = Tag.create!(tag_params)
    end

    def index
        tags = Tag.all
        render json: tags
    end
   
    private

    def tag_params
        params.permit(:name)
    end
end
