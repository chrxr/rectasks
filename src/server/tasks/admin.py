from django.contrib import admin
from tasks.models import task

# Register your models here.

@admin.register(task)
class taskAdmin(admin.ModelAdmin):
  list_display = ('name', 'lastCompleted', 'frequency')
