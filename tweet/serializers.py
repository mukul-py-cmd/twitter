from rest_framework import serializers
from .models import Tweet
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):

	class Meta:
		model = User
		fields=['id','username']


#manipulate a particluar field like utc date to normal datetime
#what is **validated (**??)
class MyTweetSerializer(serializers.ModelSerializer):
	user = UserSerializer(required=False)
	class Meta:
		model = Tweet
		fields = ['id','content','likes','updation_date','user']
		# read_only_fields = ['updation_date','user']
		# depth = 1

	def create(self, validated_data): 
		validated_data['user'] = self.context.get('request').user 
		return super().create(validated_data)

