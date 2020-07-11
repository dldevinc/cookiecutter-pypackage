#!/usr/bin/env python
import os
import shutil

PROJECT_DIRECTORY = os.path.realpath(os.path.curdir)


def remove(filepath):
    fullpath = os.path.join(PROJECT_DIRECTORY, filepath)
    if os.path.isfile(fullpath):
        os.remove(fullpath)
    elif os.path.isdir(fullpath):
        shutil.rmtree(fullpath)


def move(source, dest):
    fullsource = os.path.join(PROJECT_DIRECTORY, source)
    fulldest = os.path.join(PROJECT_DIRECTORY, dest)
    if os.path.exists(fullsource):
        os.rename(fullsource, fulldest)


if __name__ == '__main__':

    if '{{ cookiecutter.use_django }}' != 'y':
        remove('tests/app')
        remove('tests/manage.py')
        remove('tests/settings.py')
        remove('tests/urls.py')
        remove('tests/wsgi.py')
        move('tests/tests/test_{{cookiecutter.project_slug}}.py', 'tests/test_{{cookiecutter.project_slug}}.py')
        remove('tests/tests')

    if '{{ cookiecutter.use_pytest }}' != 'y':
        remove('tests')
        remove('tox.ini')
        remove('pytest.ini')

    if '{{ cookiecutter.use_travis }}' != 'y':
        remove('.travis.yml')
