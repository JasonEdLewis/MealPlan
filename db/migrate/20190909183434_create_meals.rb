class CreateMeals < ActiveRecord::Migration[6.0]
  def change
    create_table :meals do |t|
      t.references :user, null: false, foreign_key: true
      t.string :protein
      t.string :veg
      t.string :carb
      t.string :drink

      t.timestamps
    end
  end
end
