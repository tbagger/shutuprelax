class CreateMassages < ActiveRecord::Migration
  def self.up
    create_table :massages do |t|
      t.string :title
      t.string :subtitle
      t.text :description
      t.string :options
      t.string :suboptions
    end
  end

  def self.down
    drop_table :massages
  end
end
