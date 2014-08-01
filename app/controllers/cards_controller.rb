class CardsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :update]
  before_action :set_card, only: [:show, :update]

  def index
    @cards = Card.all
    render json: @cards
  end

  def show
    render json: @card
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
    user = User.find(params[:user_id]);
    card = Card.find(params[:card_id]);
    vote = params[:vote].to_i;

    ActiveRecord::Base.transaction do
      user.vote_count -= vote
      card.votes += vote
      user.save!
      card.save!
    end

    render json: { card: card, user: user }.to_json
  end

  private

    def set_card
      @card = Card.find_by_id(params[:id]) || not_found
    end

    def card_params
      params.require(:card).permit(
        :description, :votes
      )
    end
end
