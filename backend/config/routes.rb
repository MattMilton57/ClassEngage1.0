Rails.application.routes.draw do
  resources :assessments
  resources :students_periods
  resources :registrations
  resources :students
  resources :periods
  resources :teachers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
