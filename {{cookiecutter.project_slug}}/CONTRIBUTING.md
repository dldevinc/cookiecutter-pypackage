# Contribution

## Development

#### Setup

1. Clone the repository
    ```shell
    git clone https://github.com/{{ cookiecutter.github_username }}/{{ cookiecutter.project_slug }}
    ```
1. Create a virtualenv
    ```shell
    cd {{ cookiecutter.project_slug }}
    virtualenv env
    ```
1. Activate virtualenv
    ```shell
    source env/bin/activate
    ```
1. Install dependencies as well as a local editable copy of the library
    ```shell
    pip install -r ./requirements_dev.txt
    pip install -e .
    ```

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