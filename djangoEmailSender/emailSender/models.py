from django.db import models

class UploadedFiles(models.Model):
    file =  models.FileField(upload_to='documents/%Y/%m/%d')
    image = models.ImageField(upload_to='images/Y%/m%/%d')
