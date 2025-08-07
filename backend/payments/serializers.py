from rest_framework import serializers
from .models import Payment
from users.serializers import UserProfileSerializer
from courses.serializers import CourseSerializer

class PaymentSerializer(serializers.ModelSerializer):
    user = UserProfileSerializer(read_only=True)
    course = CourseSerializer(read_only=True)

    class Meta:
        model = Payment
        fields = '__all__'
