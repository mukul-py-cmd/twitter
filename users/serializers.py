from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ['first_name','last_name','username','email','password']

	def create(self, validated_data):
		instance = User(
			first_name = validated_data['first_name'],
			last_name = validated_data['last_name'],
			username = validated_data['username'],
			email = validated_data['email'],

			)
		instance.set_password(validated_data['password'])
		instance.save()
		return instance

class UserProfile(serializers.ModelSerializer):
	class Meta:
		model =User
		fields = ['first_name','last_name','username','email']


class ProfileSerializer(serializers.ModelSerializer):
	user = UserProfile(read_only =True)

	class Meta:
		model =Profile
		fields = ['user','image','followers','following','bio']
		read_only_fields = ['followers','following']
		# extra_kwargs = {'image': {'write_only': True}}

