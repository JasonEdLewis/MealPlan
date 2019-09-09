# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

pete = User.create(name:"Pete", age:31, weight:125)
ron = User.create(name:"Ron", age:26, weight:156)
nate = User.create(name:"Nate", age:28, weight:191)

peteLunch = Meal.create(user_id:1, protein:"Chicken salad", veg:"Broccoli", carb: "rice", drink:"seltzer")
peteDinner = Meal.create(user_id:1, protein: "Steak", veg: "Green Beans", carb:"Potato", drink: "root beer")
# ronLunch = Meal.create(user_id:2, protein: "", veg:, carb:, drink:)
# ronDunch = Meal.create(user_id:2, protein:, veg:, carb:, drink:)
