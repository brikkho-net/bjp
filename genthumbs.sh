#!/bin/bash

set -ex

rm -f img/thumbs/*
cp img/full/* img/thumbs
sips -Z 400 img/thumbs/*
