from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt


def home(request):
    return HttpResponse("Hello")


def about(request):
    return HttpResponse("about")

def contact(request):
    return HttpResponse("contact")

@csrf_exempt
def postdata(request):
    print(request)
    return HttpResponse("hmm")    
        
        