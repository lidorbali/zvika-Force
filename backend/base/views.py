from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .Products import products
from .models import Product

from .serializers import ProductSerializer

# Create your views here.

#routes
@api_view(['GET'])
def GetRoutes(request):
    routes = [

        '/api/products/',
        '/api/products/create/',
        '/api/products/upload/',
        '/api/products/<id>/reviews/',
        '/api/products/top/',
        '/api/products/<id>/',
        '/api/products/delete/<id>/',
        '/api/products/<update>/<id>/',


    ]

    return Response(routes)

# get all products
@api_view(['GET'])
def GetProducts(requset):
    products = Product.objects.all()
    serializer= ProductSerializer(products ,many=True) 
    return Response(serializer.data)
  

#get products by id
@api_view(['GET'])
def GetProductById(requset, pk):
    product = Product.objects.get(_id=pk)
    serializer=ProductSerializer(product,many=False)
   
    return Response(serializer.data)
