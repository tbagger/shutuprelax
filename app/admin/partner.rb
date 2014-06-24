ActiveAdmin.register Partner do

  menu :priority => 3

  # See permitted parameters documentation:
  # https://github.com/gregbell/active_admin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  permit_params :name, :link


  index do
    column :name
    column :link
    actions
  end

  form do |f|
    f.inputs "Partner" do
      f.input :name, :label => 'Partner Name', :required => true
      f.input :link
    end
    f.actions
  end

end
