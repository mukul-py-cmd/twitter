from django.shortcuts import render, get_object_or_404
from .serializers import MyTweetSerializer
from rest_framework import generics,status
from rest_framework.response import Response
from .models import Tweet
from rest_framework.renderers import JSONRenderer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import BasePermission, IsAuthenticated
from .permissions import IsTweetAuthor
# Create your views here.


class MyTweetView(generics.ListCreateAPIView):
	serializer_class = MyTweetSerializer
	authentication_classes =[TokenAuthentication,]
	permission_classes = [IsAuthenticated]
	renderer_classes = [JSONRenderer]
	def get_queryset(self):

		queryset = Tweet.objects.filter(user=self.request.user)
		return queryset

class MyTweetDeleteView(generics.DestroyAPIView):
	authentication_classes =[TokenAuthentication,]
	permission_classes = [IsAuthenticated,IsTweetAuthor]
	lookup_field="id"

	def get_queryset(self):
		queryset = Tweet.objects.all()
		return queryset


class AllTweetView(generics.ListAPIView):
	serializer_class = MyTweetSerializer
	queryset=Tweet.objects.all()
	# authentication_classes =[TokenAuthentication,]
	# permission_classes = [IsAuthenticated]
	renderer_classes = [JSONRenderer]