from django.shortcuts import render
from .models import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
@api_view(['POST'])
def LoginUser(request):
    if request.method=="POST":
        data = json.loads(request.body)
        print(type(data))
        name=data.get('user')
        password=data.get('password')
        if password==None:
            return Response("password invalid",403)
        else:
            return Response({'done'},200)
            
             