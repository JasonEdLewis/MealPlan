class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :weight
  has_many :meals
end
