from django import forms

class StdForm(forms.Form):
    data_list = forms.CharField(max_length=100)
    start_time = forms.CharField(max_length=20)
    submit_time = forms.CharField(max_length=20)
    gender = forms.IntegerField()
    age = forms.IntegerField()
    transportation = forms.FloatField()
    laundry = forms.FloatField()
    electro = forms.FloatField()
    coffee = forms.FloatField()
    food = forms.FloatField()
    max_value = forms.IntegerField()
    min_value = forms.IntegerField()