# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone
import model_utils.fields
import xmodule_django.models
import coursewarehistoryextended.fields


class Migration(migrations.Migration):

    dependencies = [
        ('grades', '0004_visibleblocks_course_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='PersistentCourseGrade',
            fields=[
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, verbose_name='created', editable=False)),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, verbose_name='modified', editable=False)),
                ('id', coursewarehistoryextended.fields.UnsignedBigIntAutoField(serialize=False, primary_key=True)),
                ('user_id', models.IntegerField(db_index=True)),
                ('course_id', xmodule_django.models.CourseKeyField(max_length=255)),
                ('subtree_edited_timestamp', models.DateTimeField(verbose_name=b'last content edit timestamp')),
                ('course_version', models.CharField(max_length=255, verbose_name='Guid of latest course version', blank=True)),
                ('grading_policy_hash', models.CharField(max_length=255, verbose_name='Hash of current grading policy')),
                ('percent_grade', models.FloatField()),
                ('letter_grade', models.CharField(max_length=255, verbose_name='Letter grade for course')),
            ],
        ),
        migrations.AlterUniqueTogether(
            name='persistentcoursegrade',
            unique_together=set([('course_id', 'user_id')]),
        ),
    ]
