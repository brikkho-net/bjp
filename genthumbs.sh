#!/bin/bash

set -ex

# Resize the images
rm -f img/thumbs/*
cp img/full/* img/thumbs
sips --resampleWidth 400 img/thumbs/*

# Set up the JS list of them
echo 'window.thumbs = [' > js/thumbs.js
for f in img/thumbs/*
do
  height=$(sips -g pixelHeight "$f" | tail -n+2 | cut -d" " -f4)
  echo "  {fn: '${f##*/}', height: $height}," >> js/thumbs.js
done
echo '];' >> js/thumbs.js
