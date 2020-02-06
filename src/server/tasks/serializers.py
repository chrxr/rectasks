from rest_framework import serializers
from tasks.models import task, FREQCHOICES

class TasksSerializer(serializers.ModelSerializer):
  id = serializers.IntegerField(read_only=True)

  class Meta:
    model = task
    fields = ['id', 'name', 'lastCompleted', 'frequency']