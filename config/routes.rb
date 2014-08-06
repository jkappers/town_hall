TownHall::Application.routes.draw do
  devise_for :users

  resources :cards, except: [:edit, :destroy] do
    member do
      post    "vote"
      delete  "unvote"
    end
  end

  resources :posts, except: [:edit, :destroy] do
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

  get  "admin/index"
  post "admin/freeze"
  post "admin/reset"
  get  "admin", action: "index", controller: "admin"

  root to: 'static_page#index'

  # Redirect any other route to root and let angular handle it.
  get '*path' => redirect('/')
end
