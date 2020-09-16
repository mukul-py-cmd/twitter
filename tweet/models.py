from django.db import models
# from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from datetime import datetime
User = get_user_model()
# Create your models here.
class Tweet(models.Model):
	content = models.CharField(null = True,blank = True,max_length=280)
	user = models.ForeignKey(User,on_delete=models.CASCADE,related_name='tweets',db_index=True)
	creation_date = models.DateTimeField(auto_now_add=True)
	updation_date = models.DateTimeField(auto_now=True)
	likes = models.PositiveIntegerField(default=0)
	# image = models.ImageField(upload_to='images/',blank=True,null=True)
	def __str__(self):
		return self.content[:5]