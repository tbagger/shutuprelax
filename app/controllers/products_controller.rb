class ProductsController < ApplicationController

  def index
  	@products = Product.all.order(:priority)
  end 

  def show
  	@product = Product.find(params[:id])

  end
end