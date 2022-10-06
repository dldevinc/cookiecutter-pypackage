# Cookiecutter PyPackage

[Cookiecutter][cookiecutter] template for a Python package.

## Features
* Testing setup with `pytest`
* Measuring code coverage with `pytest-cov`
* [Tox][tox] testing
* [isort][isort] and [prettier][prettier] pre-commit hooks for formatting
* [Flake8][flake8] and [MyPy][mypy] pre-commit hooks for linting
* Auto-release to PyPI when you push a new tag to master
* Simple Django app for testing purposes (optional)

## Quickstart

Install the latest Cookiecutter

```shell script
pip install -U cookiecutter
```

Install [pre-commit][precommit] framework
```shell script
pip install -U pre-commit
```

Install [Tox][tox] and [Twine][twine] (optionally)
```shell script
sudo apt-get -y install tox twine
```

Generate a Python package project:
```shell script
cookiecutter https://github.com/dldevinc/cookiecutter-pypackage.git
```

Then:
* Create a virtual environment.
```shell script
python3 -m venv --prompt="env" .venv
```
* Install the requirements into a virtualenv
```shell script
pip install -r requirements.txt
```
* Write some code.
* Install `pre-commit` hooks (optionally): 
```shell script
pre-commit install
```
* ... or run formatters and linters manualy:
```shell script
pre-commit run -a
```
* Test your code:
```shell script
tox -s
```
* Analyze code coverage:
```shell script
pytest --cov
```
* Create a GitHub repo.
* [Register][pypi] your project with PyPI.
```shell script
python3 setup.py sdist bdist_wheel
twine upload --skip-existing dist/*
```
* [Create][pypi_apikey] a new PyPI API token and save it 
  as GitHub repository secret named `PYPI_PASSWORD`.
* Release your package by pushing a new tag to master.

[cookiecutter]: https://github.com/audreyr/cookiecutter
[precommit]: https://pre-commit.com/
[isort]: https://github.com/timothycrosley/isort
[prettier]: https://prettier.io/
[flake8]: https://github.com/PyCQA/flake8
[mypy]: http://mypy-lang.org/
[tox]: http://testrun.org/tox/
[twine]: https://github.com/pypa/twine
[pypi]: https://packaging.python.org/tutorials/packaging-projects/#uploading-the-distribution-archives
[pypi_apikey]: https://test.pypi.org/help/#apitoken
