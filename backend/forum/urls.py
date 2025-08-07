from django.urls import path
from . import views

urlpatterns = [
    path('posts/', views.ForumPostListView.as_view(), name='forum-post-list'),
    path('posts/<int:pk>/', views.ForumPostDetailView.as_view(), name='forum-post-detail'),
    path('posts/create/', views.ForumPostCreateView.as_view(), name='forum-post-create'),
    path('comments/create/', views.ForumCommentCreateView.as_view(), name='forum-comment-create'),
]
