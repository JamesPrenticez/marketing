from campaigns.models import Campaign
from rest_framework import serializers
from .models import Campaign, Subscriber

class CampaignSerializer(serializers.ModelSerializer):
  
  class Meta:
    model=Campaign
    feilds="__all__"
    
class SubscriberSerializer(serializers.ModelSerializer):
  
  class Meta:
    model=Subscriber
    feilds="__all__"