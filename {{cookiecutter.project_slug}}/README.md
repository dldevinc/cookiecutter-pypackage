# {{ cookiecutter.project_name }}
{{ cookiecutter.project_short_description }}


## Development and Testing
After cloning the Git repository, you should install this
in a virtualenv and set up for development:
```shell script
virtualenv .venv
source .venv/bin/activate
pip install -r ./requirements_dev.txt
```
Then, you can run tests:
```shell script
pytest
```
