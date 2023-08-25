class CommentSerializer < ActiveModel::Serializer
  attributes :id, :description

  belongs_to :recipe
  has_one :user
end
