class ContactMailer < ActionMailer::Base

  def contact_email(message)
    @message = message
    mail(to: 'johnson.torrey@gmail.com', from: @message.email, subject: 'Shutup Relax - Contact Message')
  end
end
