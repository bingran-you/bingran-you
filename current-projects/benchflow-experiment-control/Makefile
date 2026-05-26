.PHONY: run test

PORT ?= 8765

run:
	python3 -m app.server $(PORT)

test:
	python3 -m py_compile app/*.py
	python3 -m unittest discover -s tests
