class RecipesController < ApplicationController
    def create
        recipe = @current_user.recipe.create!(recipe_create_params)
        render json: recipe, status: :created
    end

    def destroy
        recipe = find_recipe
        recipe.destroy
        head :no_content
    end
    
    private

    def recipe_create_params
        params.permit(:name, :ingredients, :directions)
    end

    def find_recipe
        @current_user.recipes.find(params[:id])
    end
end
