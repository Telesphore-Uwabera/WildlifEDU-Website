from django.urls import path
from . import views

urlpatterns = [
    path('create-payment-intent/', views.CreatePaymentIntentView.as_view(), name='create-payment-intent'),
    path('confirm-payment/', views.ConfirmPaymentView.as_view(), name='confirm-payment'),
    path('payment-history/', views.PaymentHistoryView.as_view(), name='payment-history'),
]
