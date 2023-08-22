class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :ingredients, :directions
  has_one :user
end
