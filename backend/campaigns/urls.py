from django.urls import path
from .views import CampaignListAPIView, CampaignDetailAPIView, SubscribeToCampaignAPIView

from campaigns import views

urlpatterns = [
    path('campaigns', CampaignListAPIView.as_view(), name="campaigns"),
    path('campaigns/<str:slug>', CampaignDetailAPIView.as_view(), name="campaign"),
    path('subscribe', SubscribeToCampaignAPIView.as_view(), name="subscribe"),
    path('message', views.message, name="message"),
    path('date', views.date, name="date")
]