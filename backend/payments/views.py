import stripe
from django.conf import settings
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from .models import Payment
from .serializers import PaymentSerializer
from courses.models import Course

stripe.api_key = settings.STRIPE_SECRET_KEY

class CreatePaymentIntentView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PaymentSerializer

    def create(self, request, *args, **kwargs):
        course_id = request.data.get('course_id')
        course = get_object_or_404(Course, id=course_id, is_active=True)
        
        try:
            payment_intent = stripe.PaymentIntent.create(
                amount=int(course.price * 100),  # Convert to cents
                currency='usd',
                metadata={'course_id': course.id, 'user_id': request.user.id}
            )
            
            payment = Payment.objects.create(
                user=request.user,
                course=course,
                amount=course.price,
                stripe_payment_intent_id=payment_intent.id
            )
            
            return Response({
                'client_secret': payment_intent.client_secret,
                'payment_id': payment.id
            }, status=status.HTTP_201_CREATED)
            
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

class ConfirmPaymentView(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PaymentSerializer

    def update(self, request, *args, **kwargs):
        payment_id = request.data.get('payment_id')
        payment = get_object_or_404(Payment, id=payment_id, user=request.user)
        
        try:
            payment_intent = stripe.PaymentIntent.retrieve(payment.stripe_payment_intent_id)
            
            if payment_intent.status == 'succeeded':
                payment.status = 'completed'
                payment.save()
                return Response({'status': 'Payment completed successfully'}, status=status.HTTP_200_OK)
            else:
                payment.status = 'failed'
                payment.save()
                return Response({'status': 'Payment failed'}, status=status.HTTP_400_BAD_REQUEST)
                
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

class PaymentHistoryView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PaymentSerializer

    def get_queryset(self):
        return Payment.objects.filter(user=self.request.user).order_by('-created_at')
