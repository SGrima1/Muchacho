class ChangeRestaurantDescriptionToText < ActiveRecord::Migration[6.0]
  def change
    change_column :restaurants, :description, :text
  end
end
