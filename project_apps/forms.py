from django import forms

class StdForm(forms.Form):
    answer1 = forms.IntegerField()
    answer2 = forms.IntegerField()
    answer3 = forms.IntegerField()
    answer4 = forms.IntegerField()