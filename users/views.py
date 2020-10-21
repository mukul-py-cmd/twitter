from django.shortcuts import render
from django.contrib.auth.models import User
from .serializers import UserSerializer,ProfileSerializer
from rest_framework import generics,status
from rest_framework.response import Response
from .models import Profile
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import BasePermission, IsAuthenticated
from .permissions import ReadOnly,IsProfileOwner
from django.http import Http404
# from rest_framework import status

class RegisterUser(generics.CreateAPIView):
	serializer_class = UserSerializer

	def create(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		return Response(f"Account successfully created for {serializer.data.get('first_name')} {serializer.data.get('last_name')} ", status=status.HTTP_201_CREATED, headers=headers)



class Profile_view(generics.RetrieveUpdateAPIView):
	serializer_class = ProfileSerializer
	# lookup_field="user_id"
	lookup_url_kwarg ="username"
	authentication_classes =[TokenAuthentication,]
	permission_classes = [IsAuthenticated|ReadOnly,IsProfileOwner|ReadOnly]

	def get_queryset(self):
		username = self.kwargs[self.lookup_url_kwarg]
		try:
			user_obj = User.objects.get(username=username)
		except User.DoesNotExist:
		    raise Http404("No user found")

		user_id = user_obj.id
		queryset = Profile.objects.filter(user_id=user_id)
		return queryset

	def get_object(self):
		queryset = self.filter_queryset(self.get_queryset())
		obj = queryset[0]

		# May raise a permission denied
		self.check_object_permissions(self.request, obj)

		return obj


