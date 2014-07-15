ActiveAdmin.register Product do

  menu :priority => 2

  # See permitted parameters documentation:
  # https://github.com/gregbell/active_admin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  permit_params :name, :price, :size, :description, :photo, :priority


  index do
    column :name
    column :price
    column :size
    actions
  end

  form do |f|
    f.inputs "Product" do
      f.input :name, :label => 'Product Name', :required => true
      f.input :price
      f.input :size
      f.input :description, :input_html => {:rows => 5, :cols => 10}
      f.input :photo, :label => 'Photo:', :as => :file, :hint => f.object.photo.present? ? f.template.image_tag(f.object.photo.url(:thumb)) : f.template.content_tag(:span, "no image uploaded yet")
    end
    f.actions
  end

end
