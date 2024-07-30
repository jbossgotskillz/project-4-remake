from django.urls import path
# from django.contrib import admin

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('home/', views.home, name='home'),
    path('login/', views.login, name='login'),
    path('portfolio/', views.portfolio, name='portfolio'),
    path('logout/', views.logout, name='logout'),
    # path('<int:id>/details', views.details, name='details'),
    path('buy/', views.buy, name='buy'),            #add <int:id>
    path('sell/', views.sell, name='sell'),         #add <int:id>
    # path('goodbye/', views.goodbye, name='goodbye'),
]