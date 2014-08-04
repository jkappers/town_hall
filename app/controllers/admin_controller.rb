class AdminController < ApplicationController
  def index

  end

  def freeze
    Card.update_all(locked: true)

    render "index"
  end

  def reset
    ActiveRecord::Base.transaction do
      Card.update_all(stale: true)
      User.update_all(votes: params[:vote_count].to_i)
    end

    render "index"
  end
end
