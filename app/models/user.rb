class User < ApplicationRecord
    has_many :meals, dependent: :destroy
    validates :name, :age, :weight, presence: true
    validates :age, inclusion: {in: 10..100}
    validates :weight, inclusion: {in: 75..500}
end
