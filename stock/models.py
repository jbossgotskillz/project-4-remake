from django.db import models

class Stock(models.Model):
    company = models.CharField(max_length=200, help_text='Enter the company name', verbose_name='Company')
    symbol = models.CharField(max_length=20, help_text='Enter the company ID', verbose_name='Symbol')
    quantity = models.IntegerField(default=0, help_text='How many stocks do you own?', verbose_name='Quantity')
    value = models.DecimalField(decimal_places=2, max_digits=8, help_text='How much are the stocks worth?', verbose_name='Value')
    balance = models.FloatField(default=100000.00, help_text='What is your current balance?', verbose_name='Current Balance')

    def __str__(self):
        return self.company

class Detail(models.Model):
    company = models.ForeignKey(Stock, on_delete=models.CASCADE, help_text='Enter company name', verbose_name='Company')
    description = models.TextField(help_text='What does this company do?', verbose_name='Description')
    est_date = models.DateField(help_text='When was this company established?', verbose_name='Establishment Date')

    def __str__(self):
        return str(self.company)



