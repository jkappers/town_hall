class UsersController < ApplicationController
  def current
    @resource = current_user
  end
end
