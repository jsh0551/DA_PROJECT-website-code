from django.db import models
from django.contrib.auth.models import User as U
# Create your models here.

class User_Answer(models.Model):
    answer1_1 = models.IntegerField()
    answer1_2 = models.IntegerField()
    answer1_3 = models.IntegerField()
    answer2 = models.IntegerField()
    answer3_1 = models.IntegerField()
    answer3_2 = models.IntegerField()
    answer4_1 = models.IntegerField()
    answer4_2 = models.IntegerField()
    answer5 = models.IntegerField()
    answer6_1 = models.IntegerField()
    answer6_2 = models.IntegerField()
    answer7_1 = models.IntegerField()
    answer7_2 = models.IntegerField()
    answer7_3 = models.IntegerField()
    answer8_1 = models.IntegerField()
    answer8_2 = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class UserDetail(models.Model):
    user = models.OneToOneField(U, on_delete=models.CASCADE)
    pay_plan = models.ForeignKey(User_Answer, on_delete=models.DO_NOTHING)


