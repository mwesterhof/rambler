from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Message, Room
from .serializers import MessageSerializer, RoomSerializer


class QueryParamModelViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    filter_params = []

    def get_queryset(self):
        qs = self.queryset
        for param_name in self.filter_params:
            value = self.request.query_params.get(param_name)
            if value:
                qs = qs.filter(**{param_name: value})
        return qs


class MessageViewSet(QueryParamModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = MessageSerializer
    queryset = Message.objects.all()
    filter_params = ['room', 'to_user']


class RoomViewSet(QueryParamModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
