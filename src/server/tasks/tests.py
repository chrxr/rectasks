from django.test import TestCase
from django.urls import reverse
from tasks.models import task
from tasks import views
from tasks.serializers import TasksSerializer
import datetime
from rest_framework import status
from rest_framework.test import APITestCase

# Create your tests here.

class taskTest(APITestCase):

  def setUp(self):
    self.task_attributes = {
        'name': 'Test Task',
        'lastCompleted': datetime.date.today(),
        'frequency': 'yearly',
    }
    
    self.task = task.objects.create(**self.task_attributes)
    self.serializer = TasksSerializer(instance=self.task)
  
  def test_task_creation(self):
    self.assertTrue(isinstance(self.task, task))
    self.assertEqual(self.task.__unicode__(), self.task.name)

  def test_task_serializer_contains_expected_fields(self):
    data = self.serializer.data
    self.assertEqual(set(data.keys()), set(['name', 'lastCompleted', 'frequency']))

  def tests_get_task_API_endpoint(self):
    url = reverse('task-detail', args=[1])
    response = self.client.get(url)
    self.assertEqual(response.status_code, status.HTTP_200_OK)
    self.assertEqual(response.data['name'], self.task_attributes['name'])

  def tests_get_all_tasks_API_endpoint(self):
    url = reverse('task-list')
    response = self.client.get(url)
    self.assertEqual(response.status_code, status.HTTP_200_OK)
    self.assertEqual(len(response.data), 1)

  def tests_create_task_API_endpoint(self):
    url = reverse('task-list')
    data = {'name': 'Newer task',
            'lastCompleted': datetime.date.today(),
            'frequency': 'yearly',
    }
    response = self.client.post(url, data, format='json')
    self.assertEqual(response.status_code, status.HTTP_201_CREATED)
    self.assertTrue(task.objects.filter(name='Newer task'))

  def tests_update_task_API_endpoint(self):
    url = reverse('task-detail', args=[1])
    data = {'name': 'Test Task New',
            'lastCompleted': datetime.date.today(),
            'frequency': 'yearly',
    }
    response = self.client.put(url, data, format='json')
    updated_task = task.objects.get(pk=1)
    self.assertEqual(response.status_code, status.HTTP_200_OK)
    self.assertTrue(task.objects.filter(name='Test Task New'))


