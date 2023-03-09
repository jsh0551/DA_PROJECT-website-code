from django.shortcuts import render,redirect
from .models import User_Answer,UserDetail,Student
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
# Create your views here.

# @csrf_exempt
def index(request):
    print('done')
    # print(request)
    if request.method == 'POST':
        print('-------------------------post')
        answers = User_Answer(request.POST)
        answers.test_text = 'test'
        answers.save()
        # return JsonResponse(dict(msg="You just reached with Post Method!"))
        # return redirect('index')
    else:
        answers = User_Answer()
    return render(request, "base.html",{'answers':answers})


@csrf_exempt
def createform(request):
    
    print('---------------------------------',request.POST,request.method)
    if request.method == 'POST':
        ans = User_Answer()
        ans.answer1 = request.POST['a']
        ans.answer2 = request.POST['b']
        ans.answer3 = request.POST['c']
        ans.answer4 = request.POST['d']
        ans.save()
    return render(request, 'result.html')
    # return redirect('createform')

    # return JsonResponse(dict(msg="You just reached with Post Method!"))
