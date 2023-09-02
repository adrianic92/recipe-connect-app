class Recipe < ApplicationRecord
  belongs_to :user
  has_many :recipe_tags, dependent: :delete_all
  has_many :tags, through: :recipe_tags
  has_many :comments, dependent: :delete_all
  
  validates :name, presence: true
  validates :ingredients, presence: true
  validates :directions, presence: true
end
