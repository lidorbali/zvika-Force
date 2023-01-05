from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register/' ,views.RegisterUser , name='register'),
    path('users/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('users/profile/',views.GetUserProfile ,name='users_profile'),
    path('users/',views.GetUsers ,name='users'),

    path('products/',views.GetProducts ,name='products'),
    path('product/<str:pk>/',views.GetProductById ,name='product')

]
