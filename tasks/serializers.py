from rest_framework import serializers
from tasks.models import task, FREQCHOICES

class TasksSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = task
    fields = ['name', 'lastCompleted', 'frequency']