class Comment < ApplicationRecord
  belongs_to :recipe
  belongs_to :user

  validates :description, presence: true
  validates :user_id, presence: true
end
