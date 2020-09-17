from django.urls import path
from .views import MyTweetView,MyTweetDeleteView,AllTweetView

urlpatterns = [
	path('alltweets/', AllTweetView.as_view(),name = 'get-all-tweets'),
	path('mytweet/', MyTweetView.as_view(),name = 'get-create-my-tweets'),
	path('mytweet/delete/<int:id>/', MyTweetDeleteView.as_view(),name = 'delete-my-tweets'),
	# path('mytweet/update/<int:id>/', MyTweetUpdateView.as_view(),name = 'update-my-tweets'),
]