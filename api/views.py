from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    DestroyAPIView,
    UpdateAPIView,
    CreateAPIView,
)

from api.paginations import TaskPagination
from api.serializers import CreateTaskSerializer, TaskSerializer
from post.models import Task


class TaskListAPIView(ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['product']
    pagination_class = TaskPagination


class TaskDetailAPIView(RetrieveAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class TaskDeleteAPIView(DestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class TaskUpdateAPIView(UpdateAPIView):
    queryset = Task.objects.all()
    serializer_class = CreateTaskSerializer

    def get_serializer(self, *args, **kwargs):
        return super().get_serializer(*args, **kwargs, partial=True)


class TaskCreateAPIView(CreateAPIView):
    queryset = Task.objects.all()
    serializer_class = CreateTaskSerializer
