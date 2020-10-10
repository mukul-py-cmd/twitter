from django.db import models
from django.contrib.auth.models import User
# from PIL import Image
# Create your models here.


def user_directory_path(instance,filename):
	return f'profile_pics/user_{instance.user.id}/{filename}'




class Profile(models.Model):
	user = models.OneToOneField(User,related_name='profile',on_delete=models.CASCADE)
	image = models.ImageField(default = 'default.jpg',upload_to = user_directory_path)
	followers = models.PositiveIntegerField(default=0)
	following = models.PositiveIntegerField(default=0)
	bio =  models.CharField(null = True,blank = True,max_length=300)

	def __str__(self):
		return f'{self.user.username} profile'

	# def save(self,*args,**kwargs):
	# 	super(Profile,self).save(*args,**kwargs)

	# 	img = Image.open(self.image.path)
	# 	if img.height > 300 or img.width > 300:
	# 		output_size = (300,300)
	# 		img.thumbnail(output_size)
	# 		print(str(self.image.path))
	# 		img.save(self.image.path)

