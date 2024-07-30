# project-4-remake

Name: Jordan Woodard

Overview: This is a school project for a paper trading app that I made called "General Banks". The overall theme of the app is based on the military, and the general idea is that you as the user are a "soldier" who is "serving" in the "army" to "fight" a "war" in order to manage your finances.

Details: 

--Chart--

General Banks features a chart that I built with Chart.js, which it uses to track stock data. The stock chart can be found on the Portfolio page.  Five lines (each of which representing a company) appear on the chart, but you can click on the labels to make them disappear.

--Stocks--

Just like the chart, the stock list can also be found on the Portfolio page.  All five companies have their own section, each coming with a pair of counters (one for the stock price and another for the amount of shares), as well as buy and sell buttons.  Clicking on the buy button makes the price counter go down and the shares counter go up, whereas clicking on the sell button makes the price counter go up and the shares counter go down.  If you try to sell any more shares once the share counter reaches zero, an alert box appears, informing you that you have no more shares.

--Navigation--

Nine pages make up the project in total. However, only five of them (Index, Home, Login, Portfolio, and Logout) are accessible, since the other four (Registration, Contact, Settings, and Delete) are not. The links used for page navigation are just below the navbar. The Index page is the root page.  From here, you can move to the Home page, then to the Login page, then to the Portfolio page, then to the Logout page, and then back to the Home page.

--Other--

Most pages feature an audio control panel near the top that plays a unique music track. The music is set to play automatically and will loop when the track reaches the end, but you can pause or mute it if you don't want to listen to it.

Technologies: html, css, js, py

Minimal Requirements:  Python 3.8.10, Django 4.2.14, Chart.js 2.9.4

Improvements: spend more time writing Python code, add login authentication, include event handling for the chart

{% load static %}

<DOCTYPE html>

<html lang="en">

    <head>

        <title>General Banks</title>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap" rel="stylesheet">

        {% load django_bootstrap5 %}
        {% bootstrap_css %}
        {% bootstrap_javascript %}
        
        <link rel="icon" type="image/x-icon" href="{% static './images/emblem.jpg' %}">

        <link rel="stylesheet" href="{% static './css/template.css' %}">

    </head>

    <body>

        {% comment %} navbar {% endcomment %}

        {% include 'navbar.html' %}

        {% comment %} header {% endcomment %}

        <div class="container text-center">
            <div class="row">
                <div class="col-4">
                    <img src="{% static './images/soldier.jpg' %}" height="180" alt="index squad">
                </div>
                <div class="col-4 my-auto">
                    <h1 class="header">INDEX</h1>
                </div>
                <div class="col-4">
                    <img src="{% static './images/soldier.jpg' %}" height="180" alt="index squad">
                </div>
            </div>        
        </div>

        {% comment %} url paths {% endcomment %}

        <div class="container">
            <ul>
                <li><a class="nav-link" href="{% url 'home' %}">Enter the Base (Home)</a></li>
            </ul>
        </div>  

        {% comment %} introduction {% endcomment %}

        <div class="container">
            <p>Hello there, soldier.  You seem to be ready for war.  Well, what are you waiting for?  Come right in and 
                prepare to serve your stock market.  We need all the troops we can find.
            </p>
        </div>

        {% comment %} footer {% endcomment %}

        {% include 'footer.html' %}

        <style>
            body {
                background-color:  skyblue;
            }
        </style>

    </body>

</html>

