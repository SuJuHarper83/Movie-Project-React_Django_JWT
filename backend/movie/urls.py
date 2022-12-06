from django.urls import path, include
from movie import views

urlpatterns = [
    path('', views.UserComments.as_view()),
]