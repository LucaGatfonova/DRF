import json
import os

from django.core.management.base import BaseCommand
from django.utils.crypto import get_random_string

from users.models import User

JSON_PATH = 'application/json'


def load_from_json(file_name):
    with open(os.path.join(JSON_PATH, file_name + '.json'), 'r') as infile:
        return json.load(infile)


class Command(BaseCommand):
    help = 'Create random users'

    def add_arguments(self, parser):
        parser.add_argument('total', type=int, help='Indicates the number of users to be created')
        parser.add_argument('-p', '--prefix', type=str, help='Define a user_name prefix', )
        parser.add_argument('-a', '--admin', action='store_true', help='Create an admin account')

    def handle(self, *args, **kwargs):
        total = kwargs['total']
        prefix = kwargs['prefix']
        admin = kwargs['admin']

        for i in range(total):
            if prefix:
                email = '{random_string}@{prefix}.local'.format(prefix=prefix, random_string=get_random_string())
                user_name = '{prefix}_{random_string}'.format(prefix=prefix, random_string=get_random_string())
            else:
                email = get_random_string()
                user_name = get_random_string()
            User.objects.create_user(username=user_name, email=email, password='123')

            if admin:
                User.objects.create_superuser(username='drf', email='drf@django.local', password='rest')
            else:
                User.objects.create_user(username=user_name, email=email, password='123')
