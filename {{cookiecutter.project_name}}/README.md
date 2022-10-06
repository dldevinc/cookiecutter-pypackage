# {{ cookiecutter.project_name }}

{{ cookiecutter.project_short_description }}

{% if cookiecutter.pypi_deploy == 'y' -%}
[![PyPI](https://img.shields.io/pypi/v/{{ cookiecutter.project_name }}.svg)](https://pypi.org/project/{{ cookiecutter.project_name }}/)
{%- endif %}
[![Build Status](https://github.com/{{ cookiecutter.github_username }}/{{ cookiecutter.project_name }}/actions/workflows/tests.yml/badge.svg)](https://github.com/{{ cookiecutter.github_username }}/{{ cookiecutter.project_name }})
[![Software license](https://img.shields.io/pypi/l/{{ cookiecutter.project_name }}.svg)](https://pypi.org/project/{{ cookiecutter.project_name }}/)

## Compatibility

-   `python` >= 3.8
{% if cookiecutter.use_django =='y' -%}
-   `django` >= 2.2
{%- endif %}

## Installation

Install the latest release with pip:

```shell
pip install {{ cookiecutter.project_name }}
```

{% if cookiecutter.use_django =='y' -%}
Add `{{ cookiecutter.project_dir }}` to your INSTALLED_APPS in django's `settings.py`:

```python
INSTALLED_APPS = (
    # other apps
    "{{ cookiecutter.project_dir }}",
)
```
{%- endif %}
