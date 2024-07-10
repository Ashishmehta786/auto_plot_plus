from django.db import models

# Create your models here.
class register_user(models.Model):
    gendera={'M':"Male",'F':"Female",'O':"Others"}
    name=models.CharField(max_length=10)
    email=models.EmailField()
    phone=models.IntegerField()
    password=models.TextField()
    gender=models.TextField(choices=gendera)




