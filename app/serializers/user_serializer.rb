class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :name, :date_of_birth, :bio
end
