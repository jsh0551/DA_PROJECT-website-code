from django.db import models
from django.contrib.auth.models import User as U
# Create your models here.

class User_Answer(models.Model):
    answer1 = models.IntegerField()
    answer2 = models.IntegerField()
    answer3 = models.IntegerField()
    answer4 = models.IntegerField()
    # created_at = models.DateTimeField(auto_now_add=True)
    # updated_at = models.DateTimeField(auto_now=True)


class UserDetail(models.Model):
    user = models.OneToOneField(U, on_delete=models.CASCADE)
    pay_plan = models.ForeignKey(User_Answer, on_delete=models.DO_NOTHING)

class Student(models.Model):
    studentID = models.IntegerField()
    name = models.CharField(max_length=30)
    major = models.CharField(max_length=100)
