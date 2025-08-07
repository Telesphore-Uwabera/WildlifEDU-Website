from rest_framework import serializers
from .models import Course, CourseEnrollment
from users.serializers import UserProfileSerializer

class CourseSerializer(serializers.ModelSerializer):
    instructor = UserProfileSerializer(read_only=True)
    
    class Meta:
        model = Course
        fields = '__all__'

class CourseEnrollmentSerializer(serializers.ModelSerializer):
    course = CourseSerializer(read_only=True)
    student = UserProfileSerializer(read_only=True)
    
    class Meta:
        model = CourseEnrollment
        fields = '__all__'
