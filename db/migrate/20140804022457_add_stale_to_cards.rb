class AddStaleToCards < ActiveRecord::Migration
  def change
    add_column :cards, :stale, :boolean, default: false
  end
end
