class CommentSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :description, :user_name, :user_image
  belongs_to :recipe
  belongs_to :user

  def user_name
    object.user.name
  end

  def user_image
    rails_blob_path(object.user.image, only_path: true) if object.user.image.attached?
  end

end
