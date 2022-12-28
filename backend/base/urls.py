from django.urls import path
from . import views

urlpatterns = [
    path('',views.GetRoutes ,name='routes'),
    path('products/',views.GetProducts ,name='products'),
    path('product/<str:pk>/',views.GetProductById ,name='product')

]
