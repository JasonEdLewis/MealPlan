class MealSerializer < ActiveModel::Serializer
  attributes :id, :protein, :carb, :veg, :drink
  belongs_to :user
end
