# {{ cookiecutter.project_name }}
{{ cookiecutter.project_short_description }}

{% if cookiecutter.pypi_deploy == 'y' -%}
[![PyPI](https://img.shields.io/pypi/v/{{ cookiecutter.project_slug }}.svg)](https://pypi.org/project/{{ cookiecutter.project_slug }}/)
{%- endif %}
{% if cookiecutter.use_travis == 'y' -%}
[![Build Status](https://travis-ci.org/{{ cookiecutter.github_username }}/{{ cookiecutter.project_slug }}.svg?branch=master)](https://travis-ci.org/{{ cookiecutter.github_username }}/{{ cookiecutter.project_slug }})
{%- endif %}

## Development and Testing
After cloning the Git repository, you should install this
in a virtualenv and set up for development:
```shell script
virtualenv .venv
source .venv/bin/activate
pip install -r ./requirements_dev.txt
{%- if cookiecutter.use_precommit == 'y' %}
pre-commit install
{%- endif %}
```
