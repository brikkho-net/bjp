#!/bin/bash

rsync -az -e "ssh -i /Users/bstraub/.ssh/id_beckyjenson" --exclude .git --progress . bagdanof@beckyjenson.com:public_html/blog12
