from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import APIView, permission_classes
from .models import Comment
from .serializers import CommentSerializer
from .models import Reply
from .serializers import ReplySerializer

# Create your views here.

class UserComments(APIView, AllowAny):
    def get(self, request, video_id):
        comments = Comment.objects.filter(video_id=video_id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class PostComment(APIView, IsAuthenticated):

    def get(self, request, pk):
        print(
            'User ', f"{request.user.id} {request.user.email} {request.user.username}")
        comments = Comment.objects.filter(pk=pk)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    def post(self, request):
        print(
            'User ', f"{request.user.id} {request.user.email} {request.user.username}")
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommentDetail(APIView, IsAuthenticated):
    
    def patch(self, request, comment_id):
        print(
            'User ', f"{request.user.id} {request.user.email} {request.user.username}")
        likes_param = request.query_params.get('likes')
        dislikes_param = request.query_params.get('dislikes')
        serializer = CommentSerializer(data=request.data)
        # comments = Comment.objects.all()
        if likes_param:
            likes = Comment.objects.filter(comment_id=comment_id)
            likes += 1
            return Response(serializer.data, status=status.HTTP_200_OK)
        elif dislikes_param:
            dislikes = Comment.objects.filter(comment_id=comment_id)
            dislikes += 1
            return Response(serializer.data, status=status.HTTP_200_OK)


    def post(self, request, pk):
        print(
            'User', f"{request.user.id} {request.user.email} {request.user.username}")
        reply = Comment.objects.filter(pk=pk)
        # serializer = CommentSerializer(comment)
        serializer = ReplySerializer(reply)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['GET'])
# @permission_classes([AllowAny])
# def get_comments_by_id(request):
#     video_id_param = request.query_params.get('video_id')
#     comments = Comment.objects.all()
#     if video_id_param:
#         comments = comments.filter(video_id=video_id_param)
#         serializer = CommentSerializer(comments, many=True)
#     return Response(serializer.data, status=status.HTTP_200_OK)


# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def user_comments(request):
#     print(
#         'User ', f"{request.user.id} {request.user.email} {request.user.username}")
#     if request.method == 'POST':
#         serializer = CommentSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save(user=request.user)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)