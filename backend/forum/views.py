from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import ForumPost, ForumComment
from .serializers import ForumPostSerializer, ForumCommentSerializer

class ForumPostListView(generics.ListAPIView):
    queryset = ForumPost.objects.filter(is_active=True).order_by('-created_at')
    serializer_class = ForumPostSerializer
    permission_classes = []

class ForumPostDetailView(generics.RetrieveAPIView):
    queryset = ForumPost.objects.filter(is_active=True)
    serializer_class = ForumPostSerializer
    permission_classes = []

class ForumPostCreateView(generics.CreateAPIView):
    queryset = ForumPost.objects.all()
    serializer_class = ForumPostSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class ForumCommentCreateView(generics.CreateAPIView):
    queryset = ForumComment.objects.all()
    serializer_class = ForumCommentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
