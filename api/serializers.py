from rest_framework import serializers
from post.models import Product, Task

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model= Product


class TaskSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='api:detail',
        lookup_field='pk'
    )
    product = ProductSerializer()
    class Meta:
        model = Task
        fields = '__all__'


class CreateTaskSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='api:detail',
        lookup_field='pk'
    )
    class Meta:
        model = Task
        fields = '__all__'


