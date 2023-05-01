from django.db import models
from django.contrib.auth.models import User as U
# Create your models here.

class User_Answer(models.Model):
    user = models.CharField(max_length=20)
    data_list = models.CharField(max_length=100)
    gender = models.IntegerField()
    age = models.IntegerField()
    transportation = models.FloatField()
    laundry = models.FloatField()
    electro = models.FloatField()
    coffee = models.FloatField()
    food = models.FloatField()
    max_value = models.IntegerField()
    min_value = models.IntegerField()
    # created_at = models.DateTimeField(auto_now_add=True)
    # updated_at = models.DateTimeField(auto_now=True)


class UserDetail(models.Model):
    user = models.OneToOneField(U, on_delete=models.CASCADE)
    pay_plan = models.ForeignKey(User_Answer, on_delete=models.DO_NOTHING)

class Student(models.Model):
    studentID = models.IntegerField()
    name = models.CharField(max_length=30)
    major = models.CharField(max_length=100)
