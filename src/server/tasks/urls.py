from django.urls import path, include
from tasks import views

urlpatterns = [
  path('tasks/', views.TaskList.as_view(), name='task-list'),
  path('tasks/<int:pk>/', views.TaskDetail.as_view(), name='task-detail')
]