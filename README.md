# DjangoEmailSender
EmailSender using Django

EmailSender built with TailwindCSS and Django
My major problem was tyring to get the code to send pictures or attachments from media folder. I think it only works if the files are going to be saved into someplace. 


<code>
  from email.mime.text import MIMEText
  from email.mime.message import MIMEMessage
  from email.mime.image import MIMEImage



  def index(request):
     if request.method == 'POST':
        recipient = request.POST['to']
         sender = request.POST['sender']
         message = request.POST['message']
         subject = request.POST['subject']
         # if len(request.FILES != 0):
         attachment = request.POST['file']
         attachment = MIMEText(attachment)
         print(recipient, sender, message, subject)
         email = EmailMessage(
                 subject,
                 message,
                 sender,
                 [recipient],
             )
        
         email.attach(attachment )
         email.send()     
         return redirect('about')
     return render(request, 'pages/index.html')
