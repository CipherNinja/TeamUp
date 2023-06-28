from django.shortcuts import render,redirect,HttpResponse
from django.views.generic import TemplateView

def home(request):
    return render(request,'index.html')