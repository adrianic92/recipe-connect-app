class RecipesController < ApplicationController
    def create
        tag_names = params[:tags]
        tags = tag_names.map do |current|
            Tag.find_or_create_by(name: current)
        end

        recipe = @current_user.recipes.create!(recipe_create_params)

        recipe.tags << tags

        render json: recipe, status: :created
    end

    def destroy
        recipe = find_recipe
        recipe.destroy
        head :no_content
    end

    def update
        recipe = find_recipe
        recipe.update(recipe_update_params)
        render json: recipe
    end

    def index
        recipes = Recipe.all
        render json: recipes
    end
    
    private

    def recipe_create_params
        params.permit(:name, :ingredients, :directions)
    end

    def recipe_update_params
        params.permit(:ingredients, :directions)
    end

    def find_recipe
        @current_user.recipes.find(params[:id])
    end
end
