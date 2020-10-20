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
        remove('tests')

    if '{{ cookiecutter.use_pytest }}' != 'y':
        remove('tests/tests')
        remove('pytest.ini')

    if '{{ cookiecutter.use_precommit }}' != 'y':
        remove('.pre-commit-config.yaml')

    if '{{ cookiecutter.use_travis }}' != 'y':
        remove('.travis.yml')
