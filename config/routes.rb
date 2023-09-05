Rails.application.routes.draw do
  resources :comments, only: [:index, :create]
  # resources :recipe_tags
  resources :tags, only: [:create, :index]
  resources :recipes, only: [:destroy, :create, :update, :index]
  resources :users, only: [:index]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  patch "/user_update", to: "users#update"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
