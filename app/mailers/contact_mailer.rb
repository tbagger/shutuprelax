class ContactMailer < ActionMailer::Base

  def contact_email(message)
    @message = message
    mail(to: 'sarah@shutuprelax.com', from: @message.email, subject: 'Shutup Relax - Contact Message')
  end
end
