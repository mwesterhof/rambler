# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from .models import Message, Room


admin.site.register(Message)
admin.site.register(Room)
