from django.urls import path
from .views import MyTweetView

urlpatterns = [
	path('mytweet/', MyTweetView.as_view(),name = 'get-create-my-tweets'),
]