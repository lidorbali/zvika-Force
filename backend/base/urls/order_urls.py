from django.urls import path
from base.views import order_views as views


urlpatterns = [
    path('add/' , views.AddOrderItem , name='orders-add'),
    path('myorders/' , views.GetMyOrders , name='myorders'),
    
    
    path('<str:pk>/' , views.GetOrderById, name='user-order'),
    path('<str:pk>/pay' , views.UpdateOrderToPaid, name='pay')


    

]
