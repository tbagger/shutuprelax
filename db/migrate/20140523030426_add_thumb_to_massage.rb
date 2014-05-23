class AddThumbToMassage < ActiveRecord::Migration
  def self.up
    add_attachment :massages, :thumbnail
  end

  def self.down
    remove_attachment :massages, :thumbnail
  end
end
