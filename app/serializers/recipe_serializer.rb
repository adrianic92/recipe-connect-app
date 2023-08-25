class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :ingredients, :directions, :tags, :comments
  has_one :user
  # has_many :recipe_tags
  # has_many :tags, through: :recipe_tags
end
