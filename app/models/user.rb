class User < ApplicationRecord
  has_one_attached :image
  has_secure_password
  has_many :recipes

  validates :name, presence: true
  validates :username, presence: true
end
