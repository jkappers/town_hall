class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.belongs_to :user

      t.string  :description, :null => false, :limit => 140
      t.integer :votes, :default => 0

      t.timestamps
    end
    add_index :cards, :user_id
  end
end
