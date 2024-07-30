from django.contrib import admin

from .models import Stock, Detail

class StockAdmin(admin.ModelAdmin):

   list_display = ('company', 'symbol', 'quantity', 'value', 'balance')

admin.site.register(Stock, StockAdmin)

class DetailAdmin(admin.ModelAdmin):

   list_display = ('company', 'description', 'est_date')

admin.site.register(Detail, DetailAdmin)
