from django.urls import path, re_path
from .views import page
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    re_path(r'^(?P<slug>[\w./-]+)/$', page, name='page'),
    re_path(r'^$', page, name='homepage'),
]