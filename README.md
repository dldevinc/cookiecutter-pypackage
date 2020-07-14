# Cookiecutter PyPackage

[Cookiecutter][cookiecutter] template for a Python package.

## Features
* Testing setup with `pytest`
* Measuring code coverage with `pytest-cov`
* [Tox][tox] testing
* [Black][black] and [isort][isort] pre-commit hooks for formatting
* [Flake8][flake8] pre-commit hook for linting
* [Travis-CI][travis]: Ready for Travis CI testing
* Auto-release to PyPI when you push a new tag to master
* Simple Django app for testing purposes (optional)

## Quickstart

Install the latest Cookiecutter

```shell script
pip install -U cookiecutter
```

Install `ruby` and `ruby-dev` for Travis CLI
```shell script
sudo apt-get -y install ruby ruby-dev
```

Install Travis CLI
```shell script
sudo gem install travis
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
* Create a repo and put it there.
* Add the repo to your [Travis-CI][travis] account.
* [Register][pypi] your project with PyPI.
```shell script
python3 setup.py sdist bdist_wheel
twine upload --skip-existing dist/*
```
* [Create][pypi_apikey] a new PyPI API token and **encrypt** it for Travis CI:
```shell script
travis encrypt API_TOKEN --add deploy.password
```

* Install the dev requirements into a virtualenv
```shell script
pip install -r requirements_dev.txt
```
* Install `pre-commit` hooks: 
```shell script
pre-commit install
```
* Write some code
* Run formatters and linters:
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
* Release your package by pushing a new tag to master.

[cookiecutter]: https://github.com/audreyr/cookiecutter
[black]: https://github.com/psf/black
[isort]: https://github.com/timothycrosley/isort
[flake8]: https://github.com/PyCQA/flake8
[travis]: https://travis-ci.org/
[precommit]: https://pre-commit.com/
[tox]: http://testrun.org/tox/
[twine]: https://github.com/pypa/twine
[pypi]: https://packaging.python.org/tutorials/packaging-projects/#uploading-the-distribution-archives
[pypi_apikey]: https://test.pypi.org/help/#apitoken
