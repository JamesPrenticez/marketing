from http.client import HTTPResponse
from django.shortcuts import render
from rest_framework import generics,response,status
from .models import Campaign, Subscriber
from .serializers import CampaignSerializer, SubscriberSerializer

from django.http import HttpResponse
import datetime
import json

class CampaignListAPIView(generics.ListAPIView):
  serializer_class=CampaignSerializer
  
  def get_queryset(self):
    return Campaign.objects.all()

class CampaignDetailAPIView(generics.GenericAPIView):
  serializer_class=CampaignSerializer
  
  def get(self, request, slug):
    query_set= Campaign.objects.filter(slug=slug).first()
    
    if query_set:
      return response.Response(self.serializer_class(query_set).data)
  
    return response.Response('Not Found', status=status.HTTP_404_NOT_FOUND)
  
class SubscribeToCampaignAPIView(generics.CreateAPIView):
    serializer_class=SubscriberSerializer 
    
    def get_queryset(self):
      return Subscriber.objects.all()
    
def message(request):
  msg = 'hi'
  return HttpResponse(msg, content_type='text/json')

def date(request):
    now = datetime.datetime.now() 
    msg = f'Today is {now}'
    return HttpResponse(msg, content_type='text/plain')

    
    