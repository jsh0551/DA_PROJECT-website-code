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
        ans.data_list = request.POST['data_list']
        ans.transportation = request.POST['transportation']
        ans.laundry = request.POST['laundry']
        ans.electro = request.POST['electro']
        ans.coffee = request.POST['coffee']
        ans.food = request.POST['food']
        ans.max_value = request.POST['max_value']
        ans.min_value = request.POST['min_value']
        # ans.save()
        return render(request, 'result.html',
                    {'data_list':ans.data_list,'transportation':ans.transportation,'laundry':ans.laundry,
                    'electro':ans.electro,'coffee':ans.coffee,'food':ans.food,
                    'max_value':ans.max_value, 'min_value':ans.min_value})
    else:
        return redirect("http://127.0.0.1:8000")
    # return redirect('createform')

    # return JsonResponse(dict(msg="You just reached with Post Method!"))
