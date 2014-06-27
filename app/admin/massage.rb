ActiveAdmin.register Massage do

  menu :label => "Massage Types", :priority => 1

  permit_params :title, :subtitle, :description, :options, :suboptions, :thumbnail, :priority

  index do
    column :title
    column :priority
    actions
  end

  form do |f|
    f.inputs "Massage" do
      f.input :title, :label => 'Massage Type', :required => true
      f.input :subtitle
      f.input :description, :input_html => {:rows => 5, :cols => 10}
      f.input :options
      f.input :suboptions
      f.input :thumbnail, :required => false, :as => :file, :hint => f.object.thumbnail.present? ? f.template.image_tag(f.object.thumbnail.url(:thumb)) : f.template.content_tag(:span, "no image uploaded yet")
      f.input :priority
    end
    f.actions
  end

  
end
