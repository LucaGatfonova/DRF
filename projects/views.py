from djangorestframework_camel_case.render import CamelCaseBrowsableAPIRenderer, CamelCaseJSONRenderer
from rest_framework.renderers import JSONRenderer
from rest_framework.viewsets import ModelViewSet


from .serializers import ProjectModelSerializer, TodoModelSerializer
from .models import Project, Todo


class ProjectModelViewSet(ModelViewSet):
    renderer_classes = [CamelCaseJSONRenderer, CamelCaseBrowsableAPIRenderer]
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer


class TodoModelViewSet(ModelViewSet):
    renderer_classes = [CamelCaseJSONRenderer, CamelCaseBrowsableAPIRenderer]
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer


