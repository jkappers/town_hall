TownHall::Application.routes.draw do
  devise_for :users
  root to: "home#index"

  resources :cards, except: [:edit, :destroy] do
    put "vote"
  end
end
