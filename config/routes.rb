Rails.application.routes.draw do
  # get 'orders/index'
  # get 'orders/new'
  # get 'orders/create'
  devise_for :users
  root to: 'pages#home'
  get 'pages/ios'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :restaurants, only: [:index, :show, :new, :create] do
    resources :dishes, only:[:create, :new]
    resources :orders, only: [:new, :create, :show]
    resources :reviews, only: [ :new, :create,:index ]
  end
  
  resources :orders, only: [:index, :show] do
    post :is_ready, on: :member
    post :is_being_delivered, on: :member
  end

  resources :dishes, only: :show do
    resources :wines, only: [:new, :create]
  end
end
