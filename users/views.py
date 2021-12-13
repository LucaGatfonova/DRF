from djangorestframework_camel_case.render import CamelCaseBrowsableAPIRenderer, CamelCaseJSONRenderer
from rest_framework import mixins, viewsets, permissions
from rest_framework.generics import ListAPIView
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import ModelViewSet
from .models import User
from .serializers import UserModelSerializer, UserStaffModelSerializer


class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    # renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    # serializer_class = UserModelSerializer
    permission_classes = [permissions.IsAuthenticated]


# class UserCustomViewSet(mixins.ListModelMixin,
#                         mixins.RetrieveModelMixin,
#                         mixins.UpdateModelMixin,
#                         viewsets.GenericViewSet):
#     #renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
#     queryset = User.objects.all()
#     serializer_class = UserModelSerializer
