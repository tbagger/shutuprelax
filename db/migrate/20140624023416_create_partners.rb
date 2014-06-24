class CreatePartners < ActiveRecord::Migration
  def self.up
    create_table :partners do |t|
      t.string :name
      t.string :link
    end
  end

  def self.down
    drop_table :partners
  end
end
