from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
# from .Products import products
from django.conf import settings
from django.contrib.auth.models import update_last_login



from.models import Product, User
from .serializers import ProductSerializer,UserSerializer, UserSerializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken,api_settings

# Create your views here.
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    token_class = RefreshToken


    def validate(self, attrs):
        data = super().validate(attrs)

        # refresh = self.get_token(self.user)
        # data["refresh"] = str(refresh)
        # data["access"] = str(refresh.access_token)
        # data["username"] =self.user.username
        # data["email"] = self.user.email
        # reaplace
        serializer = UserSerializerWithToken(self.user).data
        for key, value in serializer.items():
            data[key] = value
        
        
            if api_settings.UPDATE_LAST_LOGIN:
             update_last_login(None, self.user)

        

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

#routes
@api_view(['GET'])
def GetRoutes(request):
    routes = [
        '/users/login/',
        'users/refresh/'
        'api/products/',
        '/api/products/create/',
        '/api/products/upload/',
        '/api/products/<id>/reviews/',
        '/api/products/top/',
        '/api/products/<id>/',
        '/api/products/delete/<id>/',
        '/api/products/<update>/<id>/',


    ]

    return Response(routes)

# get specific  user from the token  becuse function  is decorated
@api_view(['GET'])
def GetUserProfile(requset):
    user= requset.user
    serializer =UserSerializer(user,many=False)
   
    return Response(serializer.data)


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

