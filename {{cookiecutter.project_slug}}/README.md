# {{ cookiecutter.project_name }}
{{ cookiecutter.project_short_description }}

{% if cookiecutter.pypi_deploy == 'y' -%}
[![PyPI](https://img.shields.io/pypi/v/{{ cookiecutter.project_slug }}.svg)](https://pypi.org/project/{{ cookiecutter.project_slug }}/)
{%- endif %}
{% if cookiecutter.use_travis == 'y' -%}
[![Build Status](https://travis-ci.com/{{ cookiecutter.github_username }}/{{ cookiecutter.project_slug }}.svg?branch=master)](https://travis-ci.org/{{ cookiecutter.github_username }}/{{ cookiecutter.project_slug }})
{%- endif %}

## Compatibility
{% if cookiecutter.use_django =='y' -%}
* `django` >= 2.0
{%- endif %}
* `python` >= 3.6
