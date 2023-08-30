class User < ApplicationRecord
  has_one_attached :image
  has_secure_password
  has_many :recipes

  validates :name, presence: true
  validates :username, presence: true
  validates :date_of_birth, presence: true

  validate :over_eighteen

  private

  def over_eighteen
    if date_of_birth.present? && date_of_birth > Date.today - 18.years
      errors.add(:date_of_birth, "You must be over 18 years old.")
    end
  end
end
