from django.shortcuts import render
from tasks.models import task
from tasks.serializers import TasksSerializer
from rest_framework import generics


# Create your views here.

class TaskList(generics.ListCreateAPIView):
  queryset = task.objects.all()
  serializer_class = TasksSerializer

class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = task.objects.all()
  serializer_class = TasksSerializer