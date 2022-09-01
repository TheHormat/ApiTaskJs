from django.urls import path
from api.views import (
    TaskListAPIView,
    TaskDetailAPIView,
    TaskDeleteAPIView,
    TaskUpdateAPIView,
    TaskCreateAPIView,
)

app_name = 'api'
urlpatterns = [
    path('list', TaskListAPIView.as_view(),name = 'list'),
    path('detail/<pk>', TaskDetailAPIView.as_view(), name='detail'),
    path('delete/<pk>', TaskDeleteAPIView.as_view(), name='delete'),
    path('update/<pk>', TaskUpdateAPIView.as_view(), name='update'),
    path('create/', TaskCreateAPIView.as_view(), name='create'),

]
