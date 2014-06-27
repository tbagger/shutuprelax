class AddOrderToMassages < ActiveRecord::Migration
  def self.up
  	add_column :massages, :priority, :integer, :default => 0, :null => false
  end

  def self.down
    remove_column :massages, :priority
  end
end
