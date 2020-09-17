from django.urls import path
from .views import MyTweetView,MyTweetDeleteView

urlpatterns = [
	path('mytweet/', MyTweetView.as_view(),name = 'get-create-my-tweets'),
	path('mytweet/delete/<int:id>/', MyTweetDeleteView.as_view(),name = 'delete-my-tweets'),
]