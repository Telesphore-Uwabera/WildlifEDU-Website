from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from .models import Course, CourseEnrollment
from .serializers import CourseSerializer, CourseEnrollmentSerializer

class CourseListView(generics.ListAPIView):
    queryset = Course.objects.filter(is_active=True)
    serializer_class = CourseSerializer
    permission_classes = []

class CourseDetailView(generics.RetrieveAPIView):
    queryset = Course.objects.filter(is_active=True)
    serializer_class = CourseSerializer
    permission_classes = []

class CourseEnrollmentView(generics.CreateAPIView):
    serializer_class = CourseEnrollmentSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        course_id = self.kwargs.get('course_id')
        course = get_object_or_404(Course, id=course_id, is_active=True)
        
        # Check if already enrolled
        if CourseEnrollment.objects.filter(student=request.user, course=course).exists():
            return Response({'detail': 'Already enrolled in this course'}, status=status.HTTP_400_BAD_REQUEST)
        
        enrollment = CourseEnrollment.objects.create(student=request.user, course=course)
        serializer = self.get_serializer(enrollment)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class MyCoursesView(generics.ListAPIView):
    serializer_class = CourseEnrollmentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return CourseEnrollment.objects.filter(student=self.request.user)
