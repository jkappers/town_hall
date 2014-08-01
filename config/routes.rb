TownHall::Application.routes.draw do
  devise_for :users
  root to: 'static_page#index'

  resources :cards, except: [:edit, :destroy] do
    put "vote"
  end

  # Redirect any other route to root and let angular handle it.
  get '*path' => redirect('/')
end
