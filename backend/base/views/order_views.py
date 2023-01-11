from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.models import Product ,Order,OrderItem,ShippingAddress
from django.contrib.auth.models import  User 
from django.contrib.auth.hashers import make_password
from base.serializers import ProductSerializer

from rest_framework import status

@api_view(['POST'])
@permission_classes(['IsAuthenticated'])
def AddOrderItem(request):
    user= request.user
    data=request.data
    
    
    orderItems= data['orderItems']    
    
    if orderItems and len(orderItems) == 0:
        return Response({'detail':'No order items'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        
        #   (1) Create order 
        order = Order.objects.create(
            user=user,
            paymentMethod=data['paymentMethod'],
            taxPrice=data['taxPrice']
        )
        #   (2) create  shipping address    
        #   (3)  create order items add set orede to order items relationship
        #   (4) Update Stock
    return('Order')