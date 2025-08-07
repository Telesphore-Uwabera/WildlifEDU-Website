from rest_framework import serializers
from .models import ForumPost, ForumComment
from users.serializers import UserProfileSerializer

class ForumPostSerializer(serializers.ModelSerializer):
    author = UserProfileSerializer(read_only=True)
    comments = serializers.SerializerMethodField()

    class Meta:
        model = ForumPost
        fields = '__all__'

    def get_comments(self, obj):
        comments = ForumComment.objects.filter(post=obj, is_active=True).order_by('created_at')
        return ForumCommentSerializer(comments, many=True).data

class ForumCommentSerializer(serializers.ModelSerializer):
    author = UserProfileSerializer(read_only=True)

    class Meta:
        model = ForumComment
        fields = '__all__'
