class ChangeRestaurantsDescriptionToNull < ActiveRecord::Migration[6.0]
  def change
    change_column :restaurants, :description, :text, :null => true
  end
end
