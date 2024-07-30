from django.shortcuts import render
from django.http import Http404
from .models import Stock, Detail
# from .forms import StockForm, DetailForm

# def index(request):
#	return render(request,'template.html')

def index(request):
	return render(request, 'index.html')	# the original base template

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
		'amount': 'massive',
		'update': 'Your objectives lie just ahead, soldier.  No point in turning back now.'
	}	

	#try:
	#	details = Stock.objects.get(pk=id)
	#except Stock.DoesNotExist:
	#	raise Http404("Company does not exist")
	return render(request, 'portfolio.html', objective)	

def logout(request):
	return render(request, 'logout.html')

def buy(request):
	return render(request, 'buy.html')

def sell(request):
	return render(request, 'sell.html')
	
"""
def details(request, id):
			return render(request, 'details.html', context)	
"""



"""
	count = Portfolio.objects.count()

	context = {

		'count': count,

		'page': 'glad to see you on the front lines',
	}
"""