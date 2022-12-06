from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import APIView, permission_classes
from .models import Comment
from .serializers import CommentSerializer

# Create your views here.

class UserComments(APIView, IsAuthenticated):

    def get(self, request):
        print(
            'User ', f"{request.user.id} {request.user.email} {request.user.username}")
        comments = Comment.objects.filter(str(video_id=request.video.id))
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    def post_comment(self, request):
        print(
            'User ', f"{request.user.id} {request.user.email} {request.user.username}")
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)