from django.urls import path
from .views import CampaignListAPIView, CampaignDetailAPIView, SubscribeToCampaignAPIView
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title="Campaign Manager",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path('/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('campaigns', CampaignListAPIView.as_view(), name="campaigns"),
    path('campaigns/<str:slug>', CampaignDetailAPIView.as_view(), name="campaign"),
    path('subscribe', SubscribeToCampaignAPIView.as_view(), name="subscribe")
]