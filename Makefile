#

# Disable parallelism in Makefile
MAKEFLAGS = -j1

# Node bin cwd
BIN = node_modules/.bin

# Commands
JSPM_CWD = $(BIN)/jspm

.PHONY: clear

clear:
  rm -rf out

