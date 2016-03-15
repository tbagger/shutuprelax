class ContactMailer < ActionMailer::Base
  default from: 'mailer@sparkpostbox.com'

  def contact_email(message)
    @message = message
    mail(to: 'sarah@shutuprelax.com', subject: 'Shutup Relax - Contact Message')
  end
end
