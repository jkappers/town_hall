class PostsController < ApplicationController
  before_action :set_card, only: [:show, :update, :vote, :unvote]

  def index
    @resources = Card.fresh.all
  end

  def new
    @card = current_user.cards.new
    render json: @card
  end

  def create
    @card = current_user.cards.create(card_params)

    if @card.save
      render status: 200, json: { success: "Card was successfully created.", card: @card }
    else
      render status: 422, json: { error: "There are problems with the card you attempted to save."}
    end
  end

  def update
    if @card.update_attributes(card_params)
      render status: 200, json: { success: "Card was successfully updated.", card: @card }
    else
      render status: 422, json: { error: "There are problems with the card you attempted to save."}
    end
  end

  def vote
    if !@card.locked? && current_user.votes > 0
      ActiveRecord::Base.transaction do
        Vote.create(user: current_user, card: @card)
        current_user.votes -= 1
        current_user.save
      end
    end

    render status: 200, nothing: true
  end

  def unvote
    if !@card.locked?
      ActiveRecord::Base.transaction do
        vote = Vote.where(user: current_user, card: @card).first
        if vote.present?
          current_user.votes += 1
          current_user.save
          vote.destroy
        end
      end
    end

    render status: 200, nothing: true
  end

  def favorite
    Favorite.find_or_create_by(card: @card, user: current_user)
    render status: 200, nothing: true
  end

  def unfavorite
    favorite = Favorite.where(card: @card, user: current_user).first
    favorite.destroy unless favorite.nil?
    render status: 200, nothing: true
  end

  private

    def set_card
      @card = Card.find_by_id(params[:id]) || not_found
    end

    def card_params
      params.require(:card).permit(:description)
    end
end
