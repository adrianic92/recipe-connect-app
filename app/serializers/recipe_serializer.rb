class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :ingredients, :directions, :user_id
  belongs_to :user
  # has_many :recipe_tags
  # has_many :tags, through: :recipe_tags
  # has_many :comments


end
