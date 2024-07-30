# Generated by Django 4.2.13 on 2024-07-01 13:51

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stock', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Stock',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company', models.CharField(max_length=200)),
                ('symbol', models.CharField(max_length=20)),
                ('description', models.TextField()),
                ('quantity', models.IntegerField(default=0)),
                ('value', models.DecimalField(decimal_places=2, max_digits=8)),
                ('profit', models.DecimalField(decimal_places=2, max_digits=8)),
                ('date', models.DateField(default=datetime.date.today)),
            ],
        ),
        migrations.RemoveField(
            model_name='trade',
            name='payment',
        ),
        migrations.DeleteModel(
            name='Portfolio',
        ),
        migrations.DeleteModel(
            name='Trade',
        ),
    ]
