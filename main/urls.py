from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
	path('admin/', admin.site.urls),
 	path('', include('stock.urls')),

]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)




# localhost:  http://127.0.0.1:5500/ (run server first)
# Quit the server with CTRL-C