class MassageController < ApplicationController
  def index
    @massages = Massage.all
  end 

  def show
    @massage = Massage.find(params[:id])
  end
end