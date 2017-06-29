from rest_framework import serializers

from .models import Message, Room


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('from_user', 'to_user', 'room', 'body')


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('name',)
