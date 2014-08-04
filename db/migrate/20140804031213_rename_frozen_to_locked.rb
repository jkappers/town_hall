class RenameFrozenToLocked < ActiveRecord::Migration
  def change
    rename_column :cards, :frozen, :locked
  end
end
