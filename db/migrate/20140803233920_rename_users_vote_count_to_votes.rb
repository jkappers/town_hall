class RenameUsersVoteCountToVotes < ActiveRecord::Migration
  def change
    rename_column :users, :vote_count, :votes
  end
end
