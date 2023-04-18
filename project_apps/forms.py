from django import forms

class StdForm(forms.Form):
    data_list = forms.CharField(max_length=100)
    transportation = forms.FloatField()
    laundry = forms.FloatField()
    electro = forms.FloatField()
    coffee = forms.FloatField()
    food = forms.FloatField()
    max_value = forms.IntegerField()
    min_value = forms.IntegerField()