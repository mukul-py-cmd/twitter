from django.shortcuts import render
from django.contrib.auth.models import User
from .serializers import UserSerializer,ProfileSerializer
from rest_framework import generics,status
from rest_framework.response import Response
from .models import Profile
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import BasePermission, IsAuthenticated
from .permissions import ReadOnly,IsProfileOwner
# from rest_framework import status

class RegisterUser(generics.CreateAPIView):
	serializer_class = UserSerializer

	def create(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		return Response(f"Account successfully created for {serializer.data.get('first_name')} {serializer.data.get('last_name')} ", status=status.HTTP_201_CREATED, headers=headers)



class Profile(generics.RetrieveUpdateAPIView):
	serializer_class = ProfileSerializer
	queryset=Profile.objects.all()
	lookup_field="user_id"
	lookup_url_kwarg ="id"
	authentication_classes =[TokenAuthentication,]
	permission_classes = [IsAuthenticated|ReadOnly,IsProfileOwner|ReadOnly]


