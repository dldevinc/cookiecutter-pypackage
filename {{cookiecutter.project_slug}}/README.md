# {{ cookiecutter.project_name }}
{{ cookiecutter.project_short_description }}

{%- if cookiecutter.use_travis == 'y' %}

![](https://travis-ci.org/{{ cookiecutter.github_username }}/{{ cookiecutter.project_slug }}.svg?branch=master)
{%- endif %}

## Development and Testing
After cloning the Git repository, you should install this 
in a virtualenv and set up for development:
```shell script
virtualenv .venv
source .venv/bin/activate
{%- if cookiecutter.use_precommit == 'y' %}
pip install tox tox-factor pre-commit twine
{%- else %}
pip install tox tox-factor twine
{%- endif %}
pip install -r ./requirements_dev.txt
pre-commit install
```

{% if cookiecutter.use_precommit == 'y' -%}
Then, you can run pre-commit hooks and tests:
```shell script
pre-commit run a
tox -f py38
```
{% else %}
Then, you can run tests:
```shell script
tox -f py38
```
{%- endif %}
