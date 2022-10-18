# Contribution

## Development

#### Setup

1. Clone the repository
    ```shell
    git clone https://github.com/{{ cookiecutter.github_username }}/{{ cookiecutter.project_name }}
    ```
1. Create a virtualenv
    ```shell
    cd {{ cookiecutter.project_name }}
    virtualenv env
    ```
1. Activate virtualenv
    ```shell
    source env/bin/activate
    ```
1. Install dependencies as well as a local editable copy of the library
    ```shell
    pip install -r ./requirements.txt
    pip install -e .
    ```
{% if cookiecutter.use_webpack == 'y' %}
    ```shell
    npm i
    npm run build
    ```
{%- endif %}
{% if cookiecutter.use_django == 'y' -%}
1. Run test project
	```shell
	python3 manage.py migrate
	python3 manage.py loaddata tests/fixtures.json
	```

	```shell
	python3 manage.py runserver
	```

	> Django admin credentials: `admin` / `admin`
{%- endif %}

{% if cookiecutter.use_precommit == 'y' -%}
#### Pre-Commit Hooks

We use [`pre-commit`](https://pre-commit.com/) hooks to simplify linting
and ensure consistent formatting among contributors. Use of `pre-commit`
is not a requirement, but is highly recommended.

```shell
pip install pre-commit
pre-commit install
```

Commiting will now automatically run the local hooks and ensure that
your commit passes all lint checks.
{%- endif %}

{% if cookiecutter.use_pytest == 'y' -%}
## Testing

To run unit tests:

```shell
pytest
```
{%- endif %}
