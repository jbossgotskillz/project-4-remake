from django.shortcuts import render
# from django.http import Http404
from .models import Stock, Detail

def index(request):
	return render(request, 'index.html')

def home(request):
	return render(request, 'home.html')

def login(request):
	detail = Detail.objects.all()
	mission = {
		'detail': detail,
	}	
	return render(request, 'login.html', mission)

def portfolio(request):
	stock = Stock.objects.all().values()
	objective = {
		'stock': stock,
		'update': 'Your objectives lie just ahead, soldier.  No point in turning back now.'
	}	

	#try:
	#	stock = Stock.objects.get(pk=id)
	#except Stock.DoesNotExist:
	#	raise Http404("Company does not exist")
	return render(request, 'portfolio.html', objective)	

def logout(request):
	return render(request, 'logout.html')
