from django.urls import path, include
from movie import views

urlpatterns = [
    path('', views.get_comments_by_id),
    path('', views.user_comments),
]