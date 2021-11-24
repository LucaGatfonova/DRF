from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from users.serializers import UserModelSerializer
from .models import Project, Todo


class ProjectModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class TodoModelSerializer(ModelSerializer):
    user = UserModelSerializer()

    class Meta:
        model = Todo
        fields = '__all__'
