# Generated by Django 3.0.3 on 2020-03-04 21:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='lastCompleted',
            field=models.DateField(blank=True, null=True),
        ),
    ]
