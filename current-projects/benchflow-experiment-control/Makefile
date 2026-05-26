.PHONY: run cli test

PORT ?= 8765

run:
	python3 -m app.server $(PORT)

cli:
	python3 -m app.cli --help

test:
	python3 -m py_compile app/*.py
	python3 -m app.cli defaults >/dev/null
	python3 -m unittest discover -s tests
