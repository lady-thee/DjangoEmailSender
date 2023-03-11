from django.shortcuts import render,redirect
from django.core.mail import EmailMessage
from django.conf import settings
from  email.mime.text import MIMEText



def index(request):
    if request.method == 'POST':
        subject = request.POST['subject']
        recipient = request.POST['to']
        message = request.POST['message']
        sender = settings.EMAIL_HOST_USER
        email = EmailMessage(
            [recipient],
            subject,
            sender,
            message
        )
        email.send()

        return redirect('about')
    return render(request, 'pages/index.html')


def about(request):
    return render(request, 'pages/about.html')












































# from email.mime.text import MIMEText
# from email.mime.message import MIMEMessage
# from email.mime.image import MIMEImage



# def index(request):
#     if request.method == 'POST':
#         recipient = request.POST['to']
#         sender = request.POST['sender']
#         message = request.POST['message']
#         subject = request.POST['subject']
#         # if len(request.FILES != 0):
#         attachment = request.POST['file']
#         attachment = MIMEText(attachment)
#         print(recipient, sender, message, subject)
#         email = EmailMessage(
#                 subject,
#                 message,
#                 sender,
#                 [recipient],
#             )
        
#         email.attach(attachment )
#         email.send()     
#         return redirect('about')
#     return render(request, 'pages/index.html')
    


# def about(request):
#     return render(request, 'pages/about.html')




