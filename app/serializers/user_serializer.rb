class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :name, :date_of_birth, :bio, :recipes, :image

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
