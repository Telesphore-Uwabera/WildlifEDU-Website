from django.urls import path
from . import views

urlpatterns = [
    path('', views.CourseListView.as_view(), name='course-list'),
    path('<int:pk>/', views.CourseDetailView.as_view(), name='course-detail'),
    path('enroll/<int:course_id>/', views.CourseEnrollmentView.as_view(), name='course-enroll'),
    path('my-courses/', views.MyCoursesView.as_view(), name='my-courses'),
]
