TownHall::Application.routes.draw do
  devise_for :users
  root to: 'static_page#index'

  resources :cards, except: [:edit, :destroy] do
    member do
      post    "vote"
      delete  "unvote"
    end
  end

  resources :users, only: :none do
    collection do
      get "current"
    end
  end

  # Redirect any other route to root and let angular handle it.
  get '*path' => redirect('/')
end
