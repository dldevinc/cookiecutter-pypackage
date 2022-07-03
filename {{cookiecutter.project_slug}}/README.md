# {{ cookiecutter.project_name }}

{{ cookiecutter.project_short_description }}

{% if cookiecutter.pypi_deploy == 'y' -%}
[![PyPI](https://img.shields.io/pypi/v/{{ cookiecutter.project_slug }}.svg)](https://pypi.org/project/{{ cookiecutter.project_slug }}/)
{%- endif %}
[![Build Status](https://github.com/{{ cookiecutter.github_username }}/{{ cookiecutter.project_slug }}/actions/workflows/tests.yml/badge.svg)](https://github.com/{{ cookiecutter.github_username }}/{{ cookiecutter.project_slug }})
[![Software license](https://img.shields.io/pypi/l/{{ cookiecutter.project_slug }}.svg)](https://pypi.org/project/{{ cookiecutter.project_slug }}/)

## Compatibility
{% if cookiecutter.use_django =='y' -%}
*   `django` >= 2.2
{%- endif %}
*   `python` >= 3.8

## Installation

Install the latest release with pip:

```shell
pip install {{ cookiecutter.project_slug }}
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
