class CardsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :update]
  before_action :set_card, only: [:show, :update]

  def index
    @cards = Card.all
  end

  def show
  end

  def new
    @card = current_user.cards.new
  end

  def create
    @card = current_user.cards.create(card_params)

    if @card.save
      redirect_to @card
    else
      # TODO: Handle error.
      render :new
    end
  end

  def update
    if @card.update_attributes(card_params)
      redirect_to @card
    else
      # TODO: Handle error.
      redirect_to @card
    end
  end

  private

    def set_card
      @card = Card.find_by_id(params[:id])
    end

    def card_params
      params.require(:card).permit(
        :description, :votes
      )
    end
end