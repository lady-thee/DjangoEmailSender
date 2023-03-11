from django import forms
from .models import UploadedFiles



class UploadForm(forms.ModelForm):

    class Meta:
        model = UploadedFiles
        fields = ('file', 'images')