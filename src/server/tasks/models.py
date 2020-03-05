from django.db import models

# Create your models here.

FREQCHOICES = [
  ("monthly", "Monthly"),
  ("quarterly", "Quarterly"),
  ("yearly", "Yearly"),
]

class task(models.Model):
  name = models.CharField(max_length=246)
  lastCompleted = models.DateField(blank=True, null=True) 
  frequency = models.CharField(max_length=246, choices=FREQCHOICES) 

  def __str__(self):
    return self.name