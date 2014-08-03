class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  def after_sign_out_path_for(resource)
    new_user_session_path
  end

  def not_found
    render status: 404, json: { error: "Not Found." }
  end
end
