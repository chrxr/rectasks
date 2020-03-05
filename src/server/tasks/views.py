from django.shortcuts import render
from tasks.models import task
from tasks.serializers import TasksSerializer, SearchSerializer
from rest_framework import generics
from tasks.documents import taskDocument
from django.http import HttpResponse, JsonResponse
import datetime
import time

# Create your views here.

class TaskList(generics.ListCreateAPIView):
  queryset = task.objects.all()
  serializer_class = TasksSerializer

class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = task.objects.all()
  serializer_class = TasksSerializer

def SearchView(request):
  if request.method == 'GET':
    start = time.perf_counter()
    term = str(request.GET['name'])
    term = term.replace('_', ' ')
    search = taskDocument.search().filter("match", name={"query": term, "fuzziness": 1})
    total = search.count()
    search = search[0:total]
    serializer = SearchSerializer(search, many=True)
    end = time.perf_counter()
    print(end-start)
    return JsonResponse(serializer.data, safe=False)

def PopulateView(request):
  if request.method == 'GET':
    for i in range(2000):
      name = "name {}".format(i)
      todaydate = datetime.date(datetime.now())
      freq = "annualy"
      newtask = task()
      newtask.name = name
      newtask.lastCompleted = todaydate
      newtask.frequency = freq
      newtask.save()
  return HttpResponse()