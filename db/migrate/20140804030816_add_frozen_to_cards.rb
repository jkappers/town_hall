class AddFrozenToCards < ActiveRecord::Migration
  def change
    add_column :cards, :frozen, :boolean, default: false
  end
end
