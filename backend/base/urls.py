from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('',views.GetRoutes ,name='routes'),
    path('users/profile/',views.GetUserProfile ,name='user_profile'),
    path('products/',views.GetProducts ,name='products'),
    path('product/<str:pk>/',views.GetProductById ,name='product')

]
