from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers
from rest_framework.authtoken import views as authtoken_views

from rambler.apps.api import views as apiviews

router = routers.DefaultRouter()
router.register(r'messages', apiviews.MessageViewSet)
router.register(r'rooms', apiviews.RoomViewSet)


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(router.urls)),
    url(r'^api-token-auth/', authtoken_views.obtain_auth_token)
]
