from django.contrib import admin
from django.urls import path,include
from post.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index_views, name='index'),
    path('update', update_views, name='update'),
    
    #APİ
    path('api/', include('api.urls',namespace='api'))

]
