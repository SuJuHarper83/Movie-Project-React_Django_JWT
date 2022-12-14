from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import APIView, permission_classes
from .models import Comment
from .serializers import CommentSerializer

# Create your views here.

class UserComments(APIView, AllowAny):
    def get(self, request, video_id):
        comments = Comment.objects.filter(video_id=video_id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)



class PostComment(APIView, IsAuthenticated):

    def post(self, request):
        print(
            'User ', f"{request.user.id} {request.user.email} {request.user.username}")
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk):
        print(
            'User ', f"{request.user.id} {request.user.email} {request.user.username}")
        comments = Comment.objects.filter(Comment, pk=pk)
        
        
        


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