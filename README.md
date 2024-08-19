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

https://general-banks-12b80dbf9c8b.herokuapp.com/

