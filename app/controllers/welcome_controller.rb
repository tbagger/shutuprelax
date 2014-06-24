class WelcomeController < ApplicationController
  layout "welcome"

  def index
  	@partners = Partner.all
  end
end
