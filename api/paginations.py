from rest_framework.pagination import PageNumberPagination

class TaskPagination(PageNumberPagination):
    page_size = 2