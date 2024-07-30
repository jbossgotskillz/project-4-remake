from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Stock, Detail # Trade

class NewUser(UserCreationForm):
    username = forms.CharField(required=True)
    email = forms.EmailField(required=True)
    new_password = forms.CharField(required=True)
    confirm_password = forms.CharField(required=True)

class Meta:
    model = User
    fields = ['username', 'email', 'new_password', 'confirm_password']

class StockForm:
    model = Stock
    fields = ['company', 'symbol', 'quantity', 'value', 'balance']

class DetailForm:
    model = Detail
    fields = ['company', 'description', 'est_date']

#class TradeForm:
#    model = Trade
#    fields = ['balance']