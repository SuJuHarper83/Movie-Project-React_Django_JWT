from django.urls import path
from movie import views

urlpatterns = [
    path('', views.PostComment.as_view()),
    path('<str:video_id>/', views.UserComments.as_view()),
    path('<int:comment_id>/', views.CommentDetail.as_view())
]