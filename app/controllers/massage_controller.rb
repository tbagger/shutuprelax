class MassageController < ApplicationController
  def index
    @massages = Massage.all
  end 

  def show

  end
end